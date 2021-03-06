<?php include("./config.php"); ?>
<!DOCTYPE html>
<html lang="en">

<head>

    <?php include("./modules/seo/seo.php"); ?>
    <title>about</title>
    <?php include("./modules/static/css.php"); ?>
   <link rel="stylesheet" href="<?php echo $css_dir ?>/about.css">
</head>

<body>
    <!-- HEADER START HERE -->
    <header>
      <!-- PROFILE TOP EDITING START HERE LIKE BACKGROUND IMG PROFILE PIC SHORT DISCRIPTION -->
      <div class="edit-container" id="profile-edit-container">
        <div class="edit-box p-3" id="profile-edit-box">
          <div class="edit-box-header">
            <h3 class="my-h2">edit basic details</h3>
            <a
              href="#"
              class="edit-btn profile-edit-close-btn"
              id="profile-edit-close-btn"
              ><i class="fas fa-times"></i
            ></a>
          </div>
          <div class="edit-box-body">
            <div class="edit-background-img edit-img-box">
              <div class="background-img-box">
                <img
                  src="./img/address.png"
                  alt="background image"
                  class="background-img"
                  id="background-img"
                />
              </div>
              <div class="p-2">
                <span class="edit-background-pen-box">
                  <h4 class="my-h3">Edit Background Image</h4>
                  <input
                    type="file"
                    class="file-btn"
                    id="background-file-input"
                    name="" />
                  <label
                    for="background-file-input"
                    class="edit-btn file-btn-label"
                    id="background-file-btn-upload"
                    ><i class="fas fa-upload"></i
                  ></label>
                  <a
                    href="#"
                    class="d-none edit-btn edit-background-img-pen"
                    id="save-background-pic-btn"
                    ><i class="fas fa-check"></i></a
                ></span>
              </div>
            </div>
            <div class="edit-background-img mt-3 edit-img-box">
              <div class="profile-pic-box">
                <img
                  src="./img/profile.jpg"
                  alt="profile pic"
                  class="profile-pic"
                  id="profile-pic"
                />
              </div>
              <div class="p-2">
                <span class="edit-background-pen-box">
                  <h4 class="my-h3">Edit Profile pic</h4>
                  <input
                    type="file"
                    class="file-btn"
                    id="file-input"
                    name="uploadimg" />
                  <label
                    for="file-input"
                    class="edit-btn file-btn-label"
                    id="file-btn-upload"
                    ><i class="fas fa-upload"></i
                  ></label>
                  <a
                    href="#"
                    class="d-none edit-btn edit-background-img-pen"
                    id="save-profile-pic-btn"
                    ><i class="fas fa-check"></i></a
                ></span>
              </div>
            </div>

            <div class="edit-background-img mt-3">
              <div class="edit-short-discription-box p-2">
                <textarea
                  name=""
                  cols="30"
                  rows="10"
                  class="edit-short-discription-input p-2"
                  placeholder="Writing something about your self"
                  id="edit-short-discription-value"
                  spellcheck="false"
                ></textarea>
                <span class="letter-count" id="letter-count"></span>
              </div>
              <div class="edit-background-img-btn-container p-2">
                <span class="edit-background-pen-box">
                  <h4 class="my-h3">Edit yout bio</h4>
                  <a
                    href="#"
                    class="disabled edit-btn edit-background-img-pen"
                    id="edit-short-discription-btn"
                    ><i class="fas fa-check"></i></a
                ></span>
              </div>
            </div>

            <div class="edit-box-footer mt-3">
              <div class="profile-save-btn">
                <a
                  href="#"
                  class="
                    disable
                    d-none
                    my-block-btn
                    profile-save-btn
                    text-uppercase
                  "
                  id="all-save"
                  disabled="true"
                  >save changes</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
<!-- PROFILE TOP EDITING END HERE LIKE BACKGROUND IMG PROFILE PIC SHORT DISCRIPTION -->
<!-- TOP PROFILE START HERE -->
      <div class="profile-wrapper">
        <div class="background-img-container">
          <div class="background-img-box">
            <img
              src="./img/address.png"
              alt="background image"
              class="background-img"
            />
          </div>
        </div>
        <div class="profile-pic-container">
          <div class="profile-pic-box">
            <img
              src="./img/profile.jpg"
              alt="profile pic"
              class="profile-pic"
            />
          </div>
          <div class="edit-btn-container" id="profile-edit-btn">
            <a href="#" class="profile-edit-btn" id="profile-edit-btn"
              ><i class="fas fa-pen"></i
            ></a>
          </div>
        </div>
        <div class="profile-name-container">
          <div class="name-box">
            <span class="first-name pr-2">abhninandan </span>
            <span> yadav</span>
          </div>
        </div>
        <div class="short-discription" id="short-discription">
          <p
            class="short-discription-text px-3 pb-2"
            id="short-discription-text"
          >
            <span class="bio">double click to add bio...</span>
          </p>
        </div>
      </div>
      <!-- TOP PROFILE END HERE -->
    </header>
<!-- HEADER END HERE -->
    
    <?php include("./modules/static/js.php"); ?>
   <script src="<?php echo $js_dir ?>/about.js"></script>
</body>

</html>
