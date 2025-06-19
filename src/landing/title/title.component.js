import './title.component.css'

function Title() {
    return (
        <div class="Title">
            <div class="Title-content">
                <div class="Title-header">
                    <div class="Title-header-name">
                        Mason Hicks
                    </div>
                    <div class="Title-header-subheader">
                        Software Engineer<br/>
                        Novice Software Architect<br/>
                        Mathematician
                    </div>
                </div>
                <img src="/headshot512.png" className="Title-headshot" alt="headshot" />
            </div>
        </div>
    );
}

export default Title;