import AboutMe from './about-me/about-me.component'
import Experience from './experience/experience.component'
import Title from './title/title.component'

function LandingScreen() {
    return (
        <div class="LandingScreen">
            <Title/>
            <AboutMe/>
            <Experience/>
        </div>
    );
}

export default LandingScreen;