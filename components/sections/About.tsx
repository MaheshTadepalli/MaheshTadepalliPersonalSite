import { Section } from "@/components/ui/Section";

export function About() {
    return (
        <Section
            id="about"
            title="About"
            subtitle="M.Tech student at IIT Bombay focused on software development, data science, and machine learning"
        >
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                <div className="space-y-6 text-text-primary">
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-accent">Academic Path</h3>
                        <p className="text-text-secondary leading-relaxed">
                            I am pursuing an M.Tech at IIT Bombay after completing my B.Tech in Electronics and Communication Engineering from
                            SRKR Engineering College, JNTUK. My current work focuses on applying software development, machine learning, and
                            computer vision to practical, data-driven problems.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-accent">Project Focus</h3>
                        <p className="text-text-secondary leading-relaxed">
                            I have built a smartphone-based augmented reality application for IIT Bombay campus exploration and a flood-risk
                            prediction pipeline using historical rainfall data, feature engineering, model benchmarking, and spatial risk mapping.
                        </p>
                    </div>
                </div>

                <div className="space-y-6 text-text-primary">
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-accent">Technical Direction</h3>
                        <p className="text-text-secondary leading-relaxed">
                            My technical interests sit at the intersection of software development, data science, machine learning, and
                            geospatial visualization. I enjoy turning raw data and sensor signals into interfaces that are clear, usable,
                            and technically reliable.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-accent">Leadership & Mentoring</h3>
                        <p className="text-text-secondary leading-relaxed">
                            As a Teaching Assistant at IIT Bombay, I support 110+ students through tutorials and doubt-solving. I also
                            served as an Interview Coordinator with the Placement Cell, coordinating with a 250+ member team for interviews
                            of 2300+ students.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
