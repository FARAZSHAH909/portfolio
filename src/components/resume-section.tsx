import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface EducationItemProps {
  period: string;
  title: string;
  institution: string;
  location:string;
  
}

const EducationItem = ({ period, title, institution, location, grade, description }: EducationItemProps) => {
  return (
    <div className="mb-8">
      <span className="text-zinc-400 text-sm mb-2 block">{period}</span>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-lg text-white mb-2">
        {institution} <span className="text-zinc-400">({location})</span>
        <span className="text-pink ml-1">{grade}</span>
      </p>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
};

interface SkillItemProps {
  name: string;
  percentage: number;
}

const SkillItem = ({ name, percentage }: SkillItemProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-zinc-200 uppercase">{name}</span>
        <span className="text-sm font-medium text-zinc-400">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-1 bg-dark-lighter" />
    </div>
  );
};

export default function ResumeSection() {
  return (
    <section id="resume" className="py-16">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient">My Resume</h2>
        </div>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="flex flex-wrap justify-center space-x-4 mb-12 border-none bg-transparent">
            <TabsTrigger
              value="education"
              className="data-[state=active]:text-pink data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink rounded-none px-4 py-2 text-lg bg-transparent"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="data-[state=active]:text-pink data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink rounded-none px-4 py-2 text-lg bg-transparent"
            >
              Professional Skills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-dark-lighter border-none rounded-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-8">Education Quality</h3>

                  <EducationItem
                    period="2022-2023"
                    title="MATRICULATION (SCIENCE)"
                    institution="Baldia Boys Secondary School
                    Karachi "
                    location="2022-2023"
                  />

                  <EducationItem
                    period="2023-2024"
                    title="Intermediate (Computer Science)"
                    institution="Govt. Degree Boys College, Malir, Karachi"
                    location="2023-2024"
                   
                  />

                  <EducationItem
                    period="CERTIFI CATION"
                    title="SMIT (SAYLANI MASS IT Training) "
                    institution="Certification in Web Development & App Development - SMIT
                  (Saylani Mass IT Center) —In Progress"
                  
                  />
                </CardContent>
              </Card>

              <Card className="bg-dark-lighter border-none rounded-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-8">Job Experience</h3>

                  <EducationItem
                    period="January 2025 – Present"
                    title="Frontend Developer (Intern) | 360XpertSolution"
                    institution="Building responsive web interfaces and working on improving user experience."
                    location="January 2025"
                  />

                  <EducationItem
                    period="January 2023 – August 2024"
                    title="QC/QA Executive | Transsion Tecno Electronics"
                    institution="Tested products, found problems, and helped improve processes."
                    location="January 2023 – August 2024"
                  />

                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              <Card className="bg-dark-lighter border-none rounded-xl">
                <CardContent className="p-8">
                  <span className="text-pink uppercase tracking-wider text-sm font-medium mb-6 inline-block">Features</span>
                  <h3 className="text-2xl font-bold text-white mb-8"> Development Skill</h3>

                  <SkillItem name="HTML" percentage={100} />
                  <SkillItem name="CSS" percentage={95} />
                  <SkillItem name="JavaScript" percentage={60} />
                  <SkillItem name="Bootstrap" percentage={80} />
                  <SkillItem name="Tailwind" percentage={90} />
                  <SkillItem name="React" percentage={65} />
                  <SkillItem name="Next" percentage={65} />
                  <SkillItem name="Typescript" percentage={55} />
                </CardContent>
              </Card>

              
            </div>
          </TabsContent>

          <TabsContent value="experience">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-dark-lighter border-none rounded-xl">
                <CardContent className="p-8">
                  <span className="text-zinc-400 text-xl mb-6 block">2010 - 2022</span>
                  <h3 className="text-2xl font-bold text-white mb-8">Job Experience</h3>

                  <EducationItem
                    period="2017 - Present"
                    title="Sr. Software Engineer"
                    institution="Google Out Tech"
                    location="USA"
                    grade=""
                    description="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
                  />

                  <EducationItem
                    period="2012 - 2016"
                    title="Web Developer & Trainer"
                    institution="Apple Developer Team"
                    location="MALAYSIA"
                    grade=""
                    description="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
                  />

                  <EducationItem
                    period="2020 - 2011"
                    title="Front-end Developer"
                    institution="Nike"
                    location="INDIA"
                    grade=""
                    description="The India economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
                  />
                </CardContent>
              </Card>

              <Card className="bg-dark-lighter border-none rounded-xl">
                <CardContent className="p-8">
                  <span className="text-zinc-400 text-xl mb-6 block">2001 - 2020</span>
                  <h3 className="text-2xl font-bold text-white mb-8">Trainer Experience</h3>

                  <EducationItem
                    period="2015 - 2020"
                    title="Gym Instructor"
                    institution="Rainbow Gym Center"
                    location="DHAKA"
                    grade=""
                    description="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                  />

                  <EducationItem
                    period="2010 - 2014"
                    title="Web Developer and Instructor"
                    institution="SuperKing College"
                    location="CANADA"
                    grade=""
                    description="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                  />

                  <EducationItem
                    period="2001 - 2010"
                    title="School Teacher"
                    institution="Kingstar Secondary School"
                    location="NEVADA"
                    grade=""
                    description="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="interview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-dark-lighter border-none rounded-xl">
                <CardContent className="p-8">
                  <span className="text-zinc-400 text-xl mb-6 block">2007 - 2010</span>
                  <h3 className="text-2xl font-bold text-white mb-8">Company Experience</h3>

                  <EducationItem
                    period="1997 - 2001"
                    title="Personal Portfolio April Fools"
                    institution="University of DVI"
                    location="1997 - 2001"
                    grade="4.30/5"
                    description="The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                  />

                  <EducationItem
                    period="1997 - 2001"
                    title="Examples Of Personal Portfolio"
                    institution="University of DVI"
                    location="1997 - 2001"
                    grade="4.30/5"
                    description="The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                  />

                  <EducationItem
                    period="1997 - 2001"
                    title="Tips For Personal Portfolio"
                    institution="University of DVI"
                    location="1997 - 2001"
                    grade="4.30/5"
                    description="The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                  />
                </CardContent>
              </Card>

              <Card className="bg-dark-lighter border-none rounded-xl">
                <CardContent className="p-8">
                  <span className="text-zinc-400 text-xl mb-6 block">2007 - 2010</span>
                  <h3 className="text-2xl font-bold text-white mb-8">Job Experience</h3>

                  <EducationItem
                    period="1997 - 2001"
                    title="Personal Portfolio April Fools"
                    institution="University of DVI"
                    location="1997 - 2001"
                    grade="4.30/5"
                    description="The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                  />

                  <EducationItem
                    period="1997 - 2001"
                    title="Examples Of Personal Portfolio"
                    institution="University of DVI"
                    location="1997 - 2001"
                    grade="4.30/5"
                    description="The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                  />

                  <EducationItem
                    period="1997 - 2001"
                    title="Tips For Personal Portfolio"
                    institution="University of DVI"
                    location="1997 - 2001"
                    grade="4.30/5"
                    description="The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
