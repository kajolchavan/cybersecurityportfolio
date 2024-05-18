import Link from "next/link";

const Resume = () => {
  return (
    <section id="resume" className="resume-area pt-130 rpt-100 rel z-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="big-icon mt-85 rmt-0 rmb-55 wow fadeInUp delay-0-2s">
              <i className="flaticon-asterisk-1" />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">My Resume</span>
                  <h2>
                    Real <span>Problem Solutions</span> Experience
                  </h2>
                </div>
              </div>
            </div>
            <div className="resume-items-wrap">
              <div className="row justify-content-between">
              <div className="col-xl-12 col-md-12">
                  <div className="resume-item wow fadeInUp delay-0-3s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">October 2023 - Present </span>
                      <h4>Ctf player</h4>
                      <h6>Try Hack Me</h6>
                      <span className="company">Mumbai, Maharashtra, India</span>
                      <p>Distinguished and seasoned Penetration Tester with 2 years of extensive expertise in orchestrating penetration tests, meticulously conducting vulnerability assessments, and executing rigorous security audits. Harshad Pawar has garnered widespread acclaim for his exceptional ability to methodically identify and remediate critical security vulnerabilities across a multifaceted spectrum of systems, networks, and applications.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-12">
                  <div className="resume-item wow fadeInUp delay-0-3s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">February 2021 - April 2023</span>
                      <h4>Penetration Tester</h4>
                      <h6>Cyber Forensics & Investigation</h6>
                      <span className="company">Mumbai, Maharashtra, India</span>
                      <p>Conducted thorough and methodical penetration tests across diverse
systems, networks, and applications, employing industry-leading tools and methodologies.
Identified and reported critical vulnerabilities, encompassing SQL injection, cross-site scripting (XSS), and privilege escalation, facilitating proactive risk mitigation strategies.
Offered strategic insights and actionable recommendations to stakeholders, guiding effective remediation efforts and enhancing overall security resilience.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-12">
                  <div className="resume-item wow fadeInUp delay-0-3s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">December 2020 - January 2021</span>
                      <h4>Intern</h4>
                      <h6>Cyber Forensics & Investigation</h6>
                      <span className="company">Mumbai, Maharashtra, India</span>
                      <p>Assisted in incident response activities, including monitoring security events and investigating potential breaches.
Contributed to the development and refinement of security policies,
procedures, and guidelines.
Organized and delivered security awareness training sessions for employees to promote a culture of security awareness.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default Resume;

export const Resume2 = () => {
  return (
    <section
      id="resume"
      className="resume-area-two bgc-black rel z-1 pt-185 rpt-145 pb-140 rpb-100"
    >
      <div className="container">
        <div className="row align-items-center pb-20">
          <div className="col-lg-8">
            <div className="section-title mb-35 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" />
                MY Expereince resume
              </span>
              <h2>work &amp; Education</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link legacyBehavior href="/contact">
              <a className="theme-btn mb-35">Contact Me</a>
            </Link>
          </div>
        </div>
        <div className="row no-gap">
          <div className="col-xl-6">
            <div className="resume-box-wrap design-two">
              <div className="timeline-heading wow fadeInUp delay-0-4s">
                <span className="title">work</span>
                <div className="arrow">
                  <i className="far fa-arrow-down" />
                </div>
              </div>
              <div className="resume-box wow fadeInLeft delay-0-2s">
                <div className="resume-column">
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2021 - Present{" "}
                      </span>
                      <h5 className="title">Senior UI Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2018 - 2021{" "}
                      </span>
                      <h5 className="title">Senior UI Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="resume-column">
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2016 - 2018{" "}
                      </span>
                      <h5 className="title">Junior UI Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2014 - 2016{" "}
                      </span>
                      <h5 className="title">Graphics Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="resume-line">
                  <span className="resume-dots" />
                  <span className="resume-dots" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="resume-box-wrap mt-110 rmt-75">
              <div className="timeline-heading wow fadeInDown delay-0-4s">
                <span className="title">study</span>
                <div className="arrow">
                  <i className="far fa-arrow-down" />
                </div>
              </div>
              <div className="resume-box wow fadeInRight delay-0-2s">
                <div className="resume-column">
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2021 - Present{" "}
                      </span>
                      <h5 className="title">Senior UI Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2018 - 2021{" "}
                      </span>
                      <h5 className="title">Senior UI Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="resume-column">
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2016 - 2018{" "}
                      </span>
                      <h5 className="title">Junior UI Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2014 - 2016{" "}
                      </span>
                      <h5 className="title">Graphics Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="resume-line">
                  <span className="resume-dots" />
                  <span className="resume-dots" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
