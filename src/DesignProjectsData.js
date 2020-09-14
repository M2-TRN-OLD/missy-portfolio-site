import balsamiqLogo from "./images/balsamiq-ar21.svg";
import aiLogo from "./images/icons8-adobe-illustrator.svg";
import xdLogo from "./images/icons8-adobe-xd.svg";
import idLogo from "./images/icons8-adobe-xd.svg";
import psLogo from "./images/icons8-adobe-photoshop.svg"
import muralLogo from "./images/muralco-ar21.svg";
import zoomLogo from "./images/zoomus-ar21.svg";
import figmaLogo from "./images/figma-ar21.svg";


// Icons
import efuReportIcon from "./images/efu_report_icon.png";
import efuWireframeIcon from "./images/efu_wireframe_icon.png";
import efuMockupIcon from "./images/efu_lo-fi_prototype_icon.png";
import doMockup1Icon from "./images/do_mockup_icon-1.png";
import doMockup2Icon from "./images/do_mockup_icon-2.png";
import gtbWireframeIcon from "./images/gtb_wireframe_icon.png";
import sycWireframeIcon from "./images/syc_wireframe_icon.png";


// Executive Followup
import section1 from "./artifacts/Section_1.pdf";
import section2 from "./artifacts/Section_2.pdf";
import section3 from "./artifacts/Section_3.pdf";
import section4 from "./artifacts/Section_4.pdf";
import section5 from "./artifacts/Section_5.pdf";
import section6 from "./artifacts/Section_6.pdf";
import section7 from "./artifacts/Section_7.pdf";
import section8 from "./artifacts/Section_8.pdf";
import section9 from "./artifacts/Section_9.pdf";
import efuReport from "./artifacts/EFU_Final_Design_Report.pdf";
import efuDataConvergence from "./artifacts/efu__data-convergence.pdf";

// shopYourCloset
import sycSiteWireframe from "./artifacts/sycSiteWireframes.png";

// getTheBook
import gtbSiteWireframe from "./artifacts/gtbSiteWireframes.png";





export const DesignData = [
  {
    id: 3,
    title: "Executive Followup",
    overview:
      "getTheBook will help bookclubs choose the right book for the group",
    artifacts: [
      {
        type: "Reporting",
        name: "Project Brief",
        desc: "this is the desc",
        artifactIcon: efuReportIcon,
        artifactLink: efuReport,
      },
      {
        type: "Reporting",
        name: "Introduction",
        desc: "this is the desc",
        artifactIcon: efuReportIcon,
        artifactLink: section1,
      },
      {
        type: "Reporting",
        name: "Research and Design Methods",
        desc: "this is the desc",
        artifactIcon: efuReportIcon,
        artifactLink: section2,
      },
      {
        type: "Reporting",
        name: "User Needs Analysis",
        desc: "this is the desc",
        artifactIcon: efuReportIcon,
        artifactLink: section3,
        supportDocLink: efuDataConvergence,
        supportDocDesc: "data convergence support doc",
      },
      {
        type: "Reporting",
        name: "Competitive Analysis",
        desc: "this is the desc",
        artifactIcon: efuReportIcon,
        artifactLink: section4,
      },
      {
        type: "Reporting",
        name: "Design Goals",
        desc: "this is the desc",
        artifactIcon: efuReportIcon,
        artifactLink: section5,
      },
      {
        type: "Reporting",
        name: "Prototype",
        desc: "this is the desc",
        artifactIcon: efuReportIcon,
        artifactLink: section6,
      },
      {
        type: "Reporting",
        name: "Final Usability Testing",
        desc: "this is the desc",
        artifactIcon: efuReportIcon,
        artifactLink: section7,
      },
      {
        type: "Reporting",
        name: "Next Steps",
        desc: "this is the desc",
        artifactIcon: efuReportIcon,
        artifactLink: section8,
      },
      {
        type: "Reporting",
        name: "Appendix",
        desc:
          "Personas, Scenarios, Pretest/Post Test Docs, Interview Scripting ",
        artifactIcon: efuReportIcon,
        artifactLink: section9,
      },
      {
        type: "Artifact",
        name: "Data Convergence",
        desc: "need mural",
        artifactIcon: efuReportIcon,
        artifactLink: "https//www.disney.com",
      },
      {
        type: "Artifact",
        name: "Wireframes",
        desc: "need wireframs",
        artifactIcon: efuWireframeIcon,
        artifactLink: "https//www.disney.com",
      },
      {
        type: "Artifact",
        name: "Mockups",
        desc: "need mockups",
        artifactIcon: efuMockupIcon,
        artifactLink: "https//www.disney.com",
      },
      {
        type: "Artifact",
        name: "Clickable Prototype",
        desc: "New User",
        artifactIcon: efuReportIcon,
        artifactLink:
          "https://www.figma.com/proto/VivSuDJJ2Kpln9v9dgdkCd/EFU-Prototypes?node-id=299%3A1482&scaling=scale-down",
      },
      {
        type: "Artifact",
        name: "Clickable Prototypes",
        desc: "Returning User",
        artifactIcon: efuReportIcon,
        artifactLink:
          "https://www.figma.com/proto/VivSuDJJ2Kpln9v9dgdkCd/EFU-Prototypes?node-id=299%3A17104&scaling=scale-down",
      },
    ],
  },
  {
    id: 1,
    title: "Dinner's On",
    overview: "Dinner's ON",
    artifacts: [
      {
        type: "Reporting",
        name: "Strategy Brief",
        desc: "need doc",
        artifactIcon: efuReportIcon,
        artifactLink: section9,
      },
      {
        type: "Artifact",
        name: "Mockups Medium Fidelity",
        desc: "need the mockups",
        artifactIcon: doMockup1Icon,
        artifactLink: "https//www.disney.com",
      },
      {
        type: "Artifact",
        name: "Mockups Final",
        desc: "need the mockup",
        artifactIcon: doMockup2Icon,
        artifactLink: "https//www.disney.com",
      },
    ],
  },
  {
    id: 2,
    title: "shopYourCloset",
    overview:
      "With shopYourCloset a user can get and maintain control over his or her wardrobe.",
    artifacts: [
         {
        type: "Reporting",
        name: "Strategy Brief",
        desc: "need doc",
        artifactIcon: efuReportIcon,
        artifactLink: section9,
      },
      {
        type: "Artifact",
        name: "Wireframes",
        desc: "got the wireframes",
        artifactIcon: sycWireframeIcon,
        artifactLink: sycSiteWireframe,
      },
      {
        type: "Artifact",
        name: "Mockups",
        desc: "need the mockups",
        artifactIcon: efuReportIcon,
        artifactLink: "https//www.disney.com",
      },
    ],
  },
  {
    id: 4,
    title: "getTheBook",
    overview:
      "getTheBook will help bookclubs choose the right book for the group.",
    artifacts: [
      {
        name: "Site Map Wireframes",
        desc: "got the wireframe",
        artifactIcon: gtbWireframeIcon,
        artifactLink: gtbSiteWireframe,
      },
      {
        name: "Mockups",
        desc: "need mockup",
        artifactIcon: efuReportIcon,
        artifactLink: "https//www.disney.com",
      },
    ],
  },
];