"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { skills } from "@/lib/constants";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

const levelColors = {
  전문: "bg-green-500",
  숙련: "bg-blue-500",
  실무: "bg-yellow-500",
} as const;

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle title="Skills" subtitle="기술과 전문성" />

        <div className="space-y-12">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              <h3 className="mb-6 text-xl font-semibold">{category.category}</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                    className="rounded-lg border border-border bg-card p-4"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-semibold">{item.name}</h4>
                      {item.level && (
                        <Tag
                          variant="secondary"
                          className={cn(
                            levelColors[item.level as keyof typeof levelColors] || "bg-gray-500"
                          )}
                        >
                          {item.level}
                        </Tag>
                      )}
                    </div>
                    {"desc" in item && item.desc && (
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    )}
                    {"tools" in item && item.tools && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.tools.map((tool) => (
                          <Tag key={tool} variant="secondary" className="text-xs">
                            {tool}
                          </Tag>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

