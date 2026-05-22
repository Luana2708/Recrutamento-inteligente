import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Brain, CheckCircle2, SlidersHorizontal, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Progress } from "./ui/progress";
import { Slider } from "./ui/slider";

const skills = ["React", "Node.js", "TypeScript", "AWS", "Figma", "SQL", "CRM", "SEO"];
const softSkills = ["Comunicação", "Liderança", "Organização", "Pensamento analítico"];

export function MatchSimulatorSection() {
  const [selectedSkills, setSelectedSkills] = useState(["React", "TypeScript", "AWS"]);
  const [selectedSoftSkills, setSelectedSoftSkills] = useState(["Comunicação"]);
  const [experience, setExperience] = useState([4]);

  const score = useMemo(() => {
    const hardSkillScore = selectedSkills.length * 8;
    const softSkillScore = selectedSoftSkills.length * 6;
    const experienceScore = Math.min(experience[0] * 7, 28);
    return Math.min(55 + hardSkillScore + softSkillScore + experienceScore, 98);
  }, [experience, selectedSkills.length, selectedSoftSkills.length]);

  function toggleSkill(skill: string, group: string[], setGroup: (value: string[]) => void) {
    setGroup(group.includes(skill) ? group.filter((item) => item !== skill) : [...group, skill]);
  }

  return (
    <section id="simulador" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-blue-600" />
            Demonstração interativa
          </div>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Simule um match com IA
          </h2>
          <p className="text-lg text-muted-foreground">
            Ajuste habilidades e experiência para ver como a compatibilidade pode ser calculada em um processo seletivo.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="p-6">
            <div className="mb-6 flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-card-foreground">Perfil do candidato</h3>
            </div>

            <div className="space-y-7">
              <div>
                <Label className="mb-3 block">Habilidades técnicas</Label>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {skills.map((skill) => (
                    <label key={skill} className="flex items-center gap-2 rounded-lg border border-border p-3 text-sm">
                      <Checkbox
                        checked={selectedSkills.includes(skill)}
                        onCheckedChange={() => toggleSkill(skill, selectedSkills, setSelectedSkills)}
                      />
                      {skill}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <Label className="mb-3 block">Competências comportamentais</Label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {softSkills.map((skill) => (
                    <label key={skill} className="flex items-center gap-2 rounded-lg border border-border p-3 text-sm">
                      <Checkbox
                        checked={selectedSoftSkills.includes(skill)}
                        onCheckedChange={() => toggleSkill(skill, selectedSoftSkills, setSelectedSoftSkills)}
                      />
                      {skill}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <Label>Experiência</Label>
                  <span className="text-sm font-medium text-card-foreground">{experience[0]} anos</span>
                </div>
                <Slider value={experience} onValueChange={setExperience} min={0} max={10} step={1} />
              </div>
            </div>
          </Card>

          <Card className="flex flex-col justify-between p-6">
            <div>
              <div className="mb-6 flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                <h3 className="text-xl font-semibold text-card-foreground">Resultado do match</h3>
              </div>
              <div className="mb-5 text-center">
                <div className="text-6xl font-bold text-green-600">{score}%</div>
                <p className="mt-2 text-sm text-muted-foreground">compatibilidade estimada</p>
              </div>
              <Progress value={score} className="mb-6 h-3" />
              <div className="space-y-3">
                {["Aderência técnica", "Perfil comportamental", "Experiência para a vaga"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-card-foreground">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-4 flex flex-wrap gap-2">
                {[...selectedSkills, ...selectedSoftSkills].slice(0, 6).map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                Gerar recomendação
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
