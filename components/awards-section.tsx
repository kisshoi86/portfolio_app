"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { ExternalLink } from "lucide-react";

const awards = [
  {
    title: "웹어워드 대상",
    org: "KIPFA",
    year: 2024,
    url: "https://example.com",
  },
  {
    title: "UX 디자인 어워드 우수상",
    org: "UX Design Awards",
    year: 2023,
    url: "https://example.com",
  },
] as const;

const press = [
  {
    title: "데이터 기반 UX 개선 사례",
    media: "ZDNet",
    year: 2023,
    url: "https://example.com",
  },
] as const;

export function AwardsSection() {
  return (
    <section id="awards" className="py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle title="Awards & Press" subtitle="수상 및 보도 자료" />

        <div className="space-y-12">
          {awards.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-6 text-xl font-semibold">수상</h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent"
                  >
                    <div>
                      <h4 className="font-semibold">{award.title}</h4>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {award.org} · {award.year}
                      </div>
                    </div>
                    {award.url && (
                      <a
                        href={award.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-muted-foreground transition-colors hover:text-foreground"
                        aria-label="View award"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {press.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-6 text-xl font-semibold">보도 자료</h3>
              <div className="space-y-4">
                {press.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent"
                  >
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {item.media} · {item.year}
                      </div>
                    </div>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-muted-foreground transition-colors hover:text-foreground"
                        aria-label="View article"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}




