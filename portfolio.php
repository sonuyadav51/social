<?php include("./config.php"); ?>
<!DOCTYPE html>
<html lang="en">

<head>

    <?php include("./modules/seo/seo.php"); ?>
    <title>portfolio</title>
    <?php include("./modules/static/css.php"); ?>
   <link rel="stylesheet" href="<?php echo $css_dir ?>/portfolio.css">
</head>

<body>
    <!-- HEADER START HERE -->
    <!-- NAVBAR START HERE -->
    <header id="home">
      <div class="nav-container">
        <div class="bar-btn-container d-md-none">
          <span class="bars-btn" id="bars-btn"
            ><i class="fas fa-bars"></i
          ></span>
          <span class="bars-btn d-none" id="bars-btn-close"
            ><i class="fas fa-times"></i
          ></span>
        </div>
      </div>
      <div class="nav-links-container" id="nav-links-container">
        <div class="horizantal-line d-md-none"></div>
        <ul class="d-md-flex nav-ul">
          <li><a href="#home" class="my-nav-link active">home</a></li>
          <li><a href="#education" class="my-nav-link">education</a></li>
          <li><a href="#skill" class="my-nav-link">skill</a></li>
          <li><a href="#project" class="my-nav-link">project</a></li>
          <li><a href="#contact" class="my-nav-link">contact</a></li>
        </ul>
      </div>
      <!-- NAVBAR END HERE -->
      <!-- INTRODUCTION START HERE -->
      <div class="intro-container">
        <div class="intro-left-pannel text-center text-xl-left">
          <div class="profile-pic-container">
            <img
              src="./img/profile.jpg"
              alt="profile-pic"
              class="profile-pic"
            />
          </div>
          <div class="name">
            <span class="first-name">abhinandan</span>
            <span class="last-name">yadav</span>
          </div>
          <div class="discription">
            <p class="discription-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              ipsum dolorum, nesciunt explicabo eos maiores officia deleniti.
              Voluptate, amet quod! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Deleniti, accusamus?
            </p>
          </div>
          <div class="intro-left-btn-container">
            <a href="" class="into-left-btn">resume</a>
          </div>
        </div>
        <div class="intro-right-pannel d-none d-xl-block">
          <img
            src="./img/portfolio.png"
            alt="portfolio image"
            class="portfolio-image"
          />
        </div>
      </div>
      <!-- INTRODUCTION END HERE -->
    </header>
    <!-- HEADER END HERE -->
    <!-- EDUCATION START HERE -->
    <div class="education-container mt-2" id="education">
      <div class="education-left-pannel d-none d-xl-block">
        <img
          src="./img/edu2.png"
          alt="portfolio image"
          class="portfolio-image"
        />
      </div>

      <div class="education-list education-right-pannel">
        <h2 class="my-h text-capitalize">education</h2>
        <div class="education-latest">
          <div class="college-pic-container">
            <img
              src="./img/profile.jpg"
              alt="profile-pic"
              class="college-pic"
            />
          </div>
          <h5 class="text-capitalize college-name">
            kamla nehru institute of technology,
            <span class="college-location">sultanpur (u.p.)</span>
          </h5>
          <h6 class="course">
            <span class="course-name">Bachelor of technology - BTech</span>,
            <span class="branch-name">Information technology</span><br />
          </h6>
          <h6 class="course">
            <span class="duration">2017 - 2019 | 7.1 cgpa</span>
          </h6>
        </div>
      </div>
    </div>
    <!-- EDUCATION END HERE -->
    <!-- SKILL START HERE -->
    <div class="skill-container mt-2" id="skill">
      <h2 class="my-h text-capitalize text-center">skill</h2>
      <div class="skill-list">
        <div class="skill mt-2">
          <div class="skill-name text-uppercase">html</div>
          <div class="skill-level">
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                style="width: 50%"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div class="skill mt-3">
          <div class="skill-name text-uppercase">css</div>
          <div class="skill-level">
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style="width: 80%"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div class="skill mt-3">
          <div class="skill-name text-uppercase">javascript</div>
          <div class="skill-level">
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style="width: 70%"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SKILL END HERE -->
    <!-- PROJECT START HERE -->
    <div class="project-container" id="project">
      <h2 class="my-h text-capitalize text-center">my project</h2>
      <div class="container-fluid">
        <div class="row justify-content-center align-item-center">
          <div class="col-12 col-md-4 col-xl-3">
            <div class="project">
              <div class="project-header">
                <h4 class="text-center text-capitalize">
                  social meadia website
                </h4>
              </div>
              <div class="project-body">
                <p class="project-discription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus blanditiis aspernatur minima, inventore consectetur,
                  vero enim sed aut velit voluptatum impedit facilis porro
                  maxime atque doloremque! Illum eos unde vel?
                </p>
                <p class="project-duration">june 2017 - june 2017</p>
                <p class="project-lang text-capitalize">
                  <span>uses: </span>
                  <span class="lang"
                    >html css javascript jquery php ajax nodejs</span
                  >
                </p>
              </div>
              <div class="project-footer">
                <a href="#" class="visit-project-btn">visit project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- PROJECT END HERE -->
    <!-- CONTACT START HERE -->
    <div class="contact-container mt-2" id="contact">
      <div class="contact-left-pannel text-center text-xl-left">
        <h2 class="my-h text-capitalize text-center">contact me</h2>
        <a href="mailto:sonukyadav2510@gmail.com" class="contact-link"
          ><span class="contact-icon"><i class="fas fa-envelope"></i></span
          ><br />
          <span class="contact-text">sonukyadav2510@gmail.com</span></a
        >
        <a href="mailto:sonukyadav2510@gmail.com" class="contact-link"
          ><span class="contact-icon"><i class="fas fa-mobile"></i></span><br />
          <span class="contact-text">+91 7905 292 740</span></a
        >
      </div>
      <div class="contact-right-pannel d-none d-xl-block">
        <img
          src="./img/address.png"
          alt="portfolio image"
          class="portfolio-image"
        />
      </div>
    </div>
    
    <?php include("./modules/static/js.php"); ?>
  <script src="<?php echo $js_dir ?>/portfolio.js"></script>
</body>

</html>
