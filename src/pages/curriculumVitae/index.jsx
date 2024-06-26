import './index.css';

const CurriculumVitae = () => {
  return (
    <div style={{ width: '100%', float: 'left' }}>
      <div className="cv">
        <div className="personInfo">
          <h2 style={{ align: 'center' }}>Lingyun Fang (Amanda)</h2>
          <p>Tel.: +61478584362 | Email:amanda.ly.f@outlook.com | <a href="https://www.linkedin.com/in/amanda-fang-494a5624a/">LinkedIn</a></p>
        </div>
        {/* <!-- Goals --> */}
        {/* <div className="cv-category">
          <hr/>
          <h2>GOALS</h2>
          <p>Taking on responsibilities and demanding challenges</p>
          <p>Applying my project management and software engineering experience</p>
        </div> */}

        {/* <!-- EDUCATION --> */}
        <div className="cv-category">
          <hr className="solid" />
          <h2>Education</h2>
          <table>
            <tr>
              <th className="organization">University of Sydney</th>
              <th className="duration">06/2022-present</th>
            </tr>
          </table>
          Major: Master of Data Science
          Unit: Cloud Computing, Natural Language Processing, Computational Statistical Methods etc.
          <table>
            <tr>
              <th className="organization">Yichun University</th>
              <th className="duration">09/2015-07/2019</th>
            </tr>
            <tr>
            </tr>
          </table>
          Major: Software Engineering
          Thesis: Design and Implementation of a Hotel management system based on SSM, grade: 79.1/100
        </div>

        {/* <!-- SKILLS --> */}
        <div className="cv-category">
          <hr />
          <h2>SKILLS</h2>
          <p>Programing Language: Java, Python, SQL, NoSQL, Vue, JavaScript</p>
          <p>Related: Spring Cloud, AWS, Scrum, Linux</p>
        </div>

        {/* <!-- WORKING EXPERIENCE --> */}
        <div className="cv-category">
          <hr />
          <h2>WORKING EXPERIENCE</h2>
          <table>
            <tr>
              <th className="organization">Yuzeen Technology Co., Ltd</th>
              <th className="duration">07/2019-2021/04</th>
            </tr>
          </table>
          IoT Software company, as a Trainee (08/2018-06/2019; part-time) then Intermediate Software Engineer (full-time)
          Mainly responsible for Service Center Module and Alarm Module in IOT Platform.
          <table>
            <tr>
              <th className="organization">Zhenyun Information Technology Co., Ltd</th>
              <th className="duration">04/2021-07/2022</th>
            </tr>
          </table>
          <tr>Supply chain software company, as a Senior Java Software Engineer (04/2021-06/2022)
            Mainly responsible for Protocol Drafting Module in Supply Chain Platform.Project: Supply chain procurement cloud platform (PAAS)Supply Chain Relationship Management System connecting clients based on the PAAS model, used Spring Cloudframework, divided into public platform and customized business part, each part includes 10+ micro service.</tr>
        </div>

        {/* <!-- PROGRAMS --> */}
        <div className="cv-category">
          <hr />
          <h2>PROGRAMS</h2>
          <p>Project: IOT Device Data Operation and Maintenance Cloud Platform (SAAS)Process large amount of equipment data on cloud platform, static data analysis and dynamic monitoring,generating reports, used Spring Cloud framework, divided into 7+ micro service. Promotion to team leader ofalarm module after 1 year.
            Used Spring Cloud (Nacos, Gateway, Hystrix etc.) to build product prototypes
            Used Redis to store hot spot data, reduce database query I/ODecoupling services by RocketMQ(message middleware) and distribute data to several modules\
            Probed into and solved technical difficulties, conducted SQL tuning, code optimization
            Used SQL to write Stored Procedures to quickly process a large amount of raw data
            Modified security module to realized user’s login by verification code, tenant authority design
            Responsible for release updates and project launchResponsible for operating and maintaining the server in Aliyun Cloud platform</p>
          <p>Used Spring AOP proxy to process aspect logic in certain methodsWrite scheduled tasks to automatically process data, send emails and SMS to notify customers
            Responsible for approval flow development, contact creation, contact publication and contact effect etc.
            Analyzed business processes, refactored and optimized complex business modules
            Docked with account managers and other developers to assess difficulty of fulfilling requirements
            Responsible for maintaining project, 139 features were completed during work period</p>
        </div>

        {/* <!-- FURTHER ACHIVEMENT --> */}
        <div className="cv-category">
          <hr />
          <h2>FURTHER ACHIVEMENT</h2>
          Qualification Certificate:
          <li>Computer and Software Technology Proficiency</li>
          <li>Software Design Engineer</li>
          <li>Scrum Fundamentals Certified</li>
          <li>AWS Academy Graduate</li>
          <li>AWS Academy Cloud Foundations</li>
          <li>Language Testing (English)</li>
          <li>IELTS: 6.5</li>
        </div>
      </div>
    </div>)
}

export default CurriculumVitae;