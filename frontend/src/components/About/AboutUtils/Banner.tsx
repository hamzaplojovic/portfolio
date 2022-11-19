import {IconBrandGithubCopilot} from "@tabler/icons"


export const Banner = () => {
    return (
        <div className="about-image-wrapper" data-aos="fade-up">
            <a href="https://github.com/hamzaplojovic" target="_blank">
                <IconBrandGithubCopilot size={550} stroke={2} className="about-image" />
            </a>
        </div>
    )
}