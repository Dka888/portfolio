export default function Experience() {
    return (
        <div>
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5"> IT Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Fullstack Web Developer</h3>
                            <div className="subheading mb-3">Mate Academy</div>
                            <ul>
                                <li>Structured, styled, and designed visually appealing, user-friendly, and responsive web pages.</li>
                                <li>Developed responsive landing pages with HTML5, CSS3, Vanilla JS, solving 150 algorithmic tasks.</li>
                                <li>Emphasized clean, maintainable code to reduce bugs, conducted code reviews, and ensured high code quality.</li>
                                <li>Contributed to projects independently and collaboratively using ReactJS, SASS, TypeScript, and BEM.</li>
                                <li>Created web pages using HTML, SCSS, BEM, and JavaScript, and designed a server with Node.js and Express.js.</li>
                                <li>Established a database with Sequelize ORM, implemented CRUD endpoints, and utilized MVC architecture.</li>
                                <li>Designed an info page for the application using React and Material UI.</li>
                                <li>Managed project progress through estimation and tracking using tools like Trello, ensuring timely completion.</li>
                                <li>Dedicated over 500 hours to coding practice.</li>
                            </ul>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="text-primary">March 2023 - Present</span>
                        </div>
                    </div>

                    <h2 className="mb-5">Other Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Realtor</h3>
                            <div className="subheading mb-3">Tecnocasa</div>
                            <ul>
                                <li>Team management based on agile methods</li>
                                <li>Conduct and mediate meetings with clients</li>
                                <li>Working with documentation</li>
                                <li>Interviewing candidates</li>
                            </ul>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="text-primary">December 2016 - August 2022</span>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </div>
    );
}