import './Header.css'

const Header = () => {
  return (
<div  data-ignore="used only for top most containter width">
        <div class="all">
          <div class="left">
            <p class="topic">Welcome to<br />Future Teach Academy...</p>
            <p class="totopic">The best way to start your learning journey.</p>
            <div class="btnplace">
              <div class="twobtn">
              </div>
              <button class="new">start new course</button>
              <button class="old">priveious Courses </button>
            </div>
          </div>
          <div class="imgandnotes">
            <div class="mid">
              <div class="notebord">
                <img src='images/image_6a2e879e.png' class="note1" /> 
                <p class="notestr1">Are you ready to take courses !</p>
              </div>
              <div class="note2">
                <p class="notestr2">boost your career with FT</p>
              </div>
            </div>
            <img src='images/image_5f54d722.png'class="girl" /> 
          </div>
        </div>
      </div>
  )
}

export default Header