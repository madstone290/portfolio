import SectionTitle from '@/components/main-layout/SectionTitle';
import SectionAnchor from '@/components/main-layout/SectionAnchor';

export default About;
function About() {
    const text = `
    저는 풀 스택 개발자입니다. 현재 Asp.net Core 와 React 및 Vanilla JS를 주로 사용합니다. 
    변화를 추구하며 새로운 기술을 배우는 것을 즐깁니다. 
    윈폼, WPF, 안드로이드 등 다양한 프레임워크를 이용하여 데스크탑, 모바일 앱을 개발한 경험이 있습니다.
    Asp.Net Razor, Blazor, Springboot, Vue, React 등 다양한 백엔드, 프론트엔드 프레임워크를 사용해보면서 웹 개발 경험을 쌓았습니다.
    최근에는 3D UI에 관심이 있어 Three.js를 공부하고 있습니다.
    `;

    return (
        <div>
            <SectionAnchor sectionId="about" />
            <SectionTitle title="About" />
            <div>{text}</div>
      
        </div>
    )
}