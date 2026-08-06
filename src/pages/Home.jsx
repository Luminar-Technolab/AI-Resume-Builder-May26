import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* landing */}
      <div style={{height:'100vh',backgroundImage:'url("/landing.png")',backgroundSize:'cover',backgroundAttachment:'fixed'}} className="d-flex justify-content-center align-items-center">
        <div style={{backgroundColor:'rgba(0,0,0,0.4)'}} className="w-50 p-5 rounded text-light text-center">
          <h1>Designed To Get Hired. Your Skills, Your Story, Your Next Job - All In One.</h1>
          <Link to={'/resume'} style={{backgroundColor:'#755846'}} className='btn text-light mt-3'>Make your Resume with AI</Link>
        </div>
      </div>
      {/* about  */}
      <div className="container my-5">
        <h1 className="text-center mb-5">What's AI rBuilder</h1>
        <div className="row align-items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <p style={{textAlign:'justify'}}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

            <p style={{textAlign:'justify'}}> The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. </p>
            <p style={{textAlign:'justify'}}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>

            <p style={{textAlign:'justify'}}>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img width={'100%'} height={'550px'} src="/resume.png" alt="resume" />
          </div>
        </div>
      </div>
      {/* banner */}
      <div style={{height:'80vh',backgroundImage:'url("/team.png")',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}></div>
      {/* testimony */}
       <div className="container my-5">
        <h1 className="text-center mb-5">Testimony</h1>
        <div className="row align-items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h5>Trusted by professionals worldwide.</h5>
            <p style={{textAlign:'justify'}}>
At rBuilder, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
</p>

            <p style={{textAlign:'justify'}}> In fact, users who used rBuilder reported getting hired an average of 48 days faster.
 </p>
            <p style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out</p>

          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="user" />
              </div>
               <div className="col-md-3">
                <img className='img-fluid p-2' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="user" />
              </div>
               <div className="col-md-3">
                <img className='img-fluid p-2' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="user" />
              </div>
               <div className="col-md-3">
                <img className='img-fluid p-2' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="user" />
              </div>
               <div className="col-md-3">
                <img className='img-fluid p-2' src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="user" />
              </div>
               <div className="col-md-3">
                <img className='img-fluid p-2' src="https://tse3.mm.bing.net/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=Api&P=0&h=180" alt="user" />
              </div>
               <div className="col-md-3">
                <img className='img-fluid p-2' src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="user" />
              </div>
               <div className="col-md-3">
                <img className='img-fluid p-2' src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" alt="user" />
              </div>
               <div className="col-md-3">
                <img className='img-fluid p-2' src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="user" />
              </div>
               <div className="col-md-3">
                <img className='img-fluid p-2' src="https://tse3.mm.bing.net/th/id/OIP.wPWx97qT9JbAIeh4t6TDVQHaHa?pid=Api&P=0&h=180" alt="user" />
              </div>
               <div className="col-md-3">
                <img className='img-fluid p-2' src="https://img.freepik.com/premium-photo/design-professional-profile-picture-with-sharp-focus-natural-lighting-clean-neutral-background_880763-20280.jpg?w=1060" alt="user" />
              </div>
               <div className="col-md-3">
                <img className='img-fluid p-2' src="https://tse2.mm.bing.net/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?pid=Api&P=0&h=180" alt="user" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home