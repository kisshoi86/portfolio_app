"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/lib/constants";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function WorkSection() {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [selectedProject, setSelectedProject] = React.useState<typeof projects[number] | null>(
    null
  );

  const allTags = React.useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  const filteredProjects = React.useMemo(() => {
    if (selectedTags.length === 0) return projects;
    return projects.filter((project) =>
      selectedTags.some((tag) => (project.tags as readonly string[]).includes(tag))
    );
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  return (
    <section id="work" className="py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title="Work" subtitle="대표 작업물" />

        <div className="mb-8 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={cn(
                "rounded-md px-3 py-1 text-sm font-medium transition-colors",
                selectedTags.includes(tag)
                  ? "bg-foreground text-background"
                  : "bg-accent text-accent-foreground hover:bg-accent/80"
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="py-12 text-center text-muted-foreground">
            선택한 필터에 일치하는 프로젝트가 없습니다.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg"
                onClick={() => setSelectedProject(project)}
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                    <div className="text-sm text-muted-foreground">{project.year}</div>
                  </div>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{project.problem}</p>
                <div className="flex flex-wrap gap-2">
                  {project.role.map((role) => (
                    <Tag key={role} variant="secondary">
                      {role}
                    </Tag>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-border bg-background p-6 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 rounded-lg p-2 transition-colors hover:bg-accent"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                <h2 className="mb-2 text-3xl font-semibold">{selectedProject.title}</h2>
                <div className="mb-6 text-sm text-muted-foreground">{selectedProject.year}</div>

                <div className="mb-6 space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold">문제 정의</h3>
                    <p className="text-muted-foreground">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">접근 방법</h3>
                    <p className="text-muted-foreground">{selectedProject.approach}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">성과 지표</h3>
                    <div className="flex flex-wrap gap-4">
                      {Object.entries(selectedProject.outcome).map(([key, value]) => (
                        <div key={key} className="rounded-lg bg-accent px-4 py-2">
                          <div className="text-sm text-muted-foreground">{key}</div>
                          <div className="text-lg font-semibold">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.role.map((role) => (
                    <Tag key={role}>{role}</Tag>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  {selectedProject.links.live && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.links.live, "_blank", "noopener")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      라이브 사이트
                    </Button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

