"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { profile, timeline } from "@/lib/constants";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle title="About" subtitle="경력과 전문성" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            플랫폼과 커머스 분야에서 20년 이상의 경험을 바탕으로, 데이터 기반의 UX 개선과
            전환율 최적화에 집중하고 있습니다. 사용자 중심의 사고와 비즈니스 목표의 균형을
            추구하며, 실무에서 검증된 방법론을 통해 지속 가능한 성과를 만들어냅니다.
          </p>
          <Button variant="outline" className="mt-4">
            <Download className="mr-2 h-4 w-4" />
            이력서 다운로드 (PDF)
          </Button>
        </motion.div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold tracking-tight">경력 타임라인</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-8" />
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative mb-8 pl-12 md:pl-16"
              >
                <div className="absolute left-2 top-1 h-4 w-4 rounded-full border-2 border-foreground bg-background md:left-6" />
                <div className="text-sm font-medium text-muted-foreground">{item.year}</div>
                <h4 className="mt-1 text-xl font-semibold">{item.title}</h4>
                <div className="mt-1 text-sm font-medium text-muted-foreground">
                  {item.company}
                </div>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




