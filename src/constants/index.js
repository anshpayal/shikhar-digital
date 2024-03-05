import { facebook, instagram, linkedin, twitter,} from "../assets";
import PortfolioImg1 from "../assets/PortfolioImg1.png"
import PortfolioImg2 from "../assets/PortfolioImg2.png"
import PortfolioImg3 from "../assets/PortfolioImg3.png"
import PortfolioImg4 from "../assets/PortfolioImg4.png"

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "faq",
    title: "FAQ",
  },
];

export const features = [
  {
    id: "feature-1",
    title: "InstaBoost : Instagram Organic Growth",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    title: "Creative Catalyst: Content Creation",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    title: "Social Fusion: Instagram Organic Growth + Content Creation",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: 0,
    name: "xdesignstudiox",
    location:"Germany ",
    content: (
      <p>
        I highly recommend Shikhar. Great communication, insights and our Instagram page got more engagement and growth. Will continue working together in the future. Great job and always delivered on time! Thank you very much for all your work for us.
      </p>
    ),
  },
  {
    id: 1,
    name: "mindrealities",
    location: "United States",
    content: (
      <p>
        Very pleasant working with the freelancer to grow my Instagram followers organically. For about a month, he grew my follower to practically non-existent to close to 300 followers. He is very responsive and attentive to my business needs. Will be back for more work. Thanks!
      </p>
    ),
  },
  {
    id: 2,
    name: "cv_swiss",
    location: "Switzerland",
    content: (
      <p>
        Shikhar was very helpful and provided great results. The services started fast, delivered on point and as promised ! Thank you Shikhar for your excellent work
      </p>
    ),
  },
  {
    id: 3,
    name: "matare2022",
    location: "United States",
    content: (
      <p>
        Second time using him. I will use him and his team again. I have many new legitimate followers that are relevant to my brand! Highly recommend him for his professionalism.
      </p>
    ),
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Total clients",
    value: "5900+",
  },
  {
    id: "stats-2",
    title: "Fiverr Rating",
    value: "4.8/5",
  },
  {
    id: "stats-3",
    title: "Engagement",
    value: "10M+",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/shikhardigital/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/share/g7YKHWzivKAaTFwc/?mibextid=qi2Omg",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://x.com/shikhardigitall",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/shikhardigital",
  },
];

export const portfolioImages = [
  {
    type:"image",
    niche:"Artist",
    plan:"30 Days",
    img:PortfolioImg1
  },
  {
    type:"image",
    niche:"Products",
    plan:"30 Days",
    img:PortfolioImg2
  },
  {
    type:"image",
    niche:"Personal Brand",
    plan:"30 Days",
    img:PortfolioImg3
  },
  {
    type:"image",
    niche:"Motivation",
    plan:"30 Days",
    img:PortfolioImg4
  },
];

export const portfolioVideos = [
  {
    type:"video",
    niche:"Podcast",
    src:"https://fast.wistia.net/embed/iframe/w9f5aeydnw?seo=false&videoFoam=false"
  },
  {
    type:"video",
    niche:"Information",
    src:"https://fast.wistia.net/embed/iframe/bdmshrf7s4?seo=false&videoFoam=false"
  },
  {
    type:"video",
    niche:"Information",
    src:"https://fast.wistia.net/embed/iframe/72svayzwi1?seo=false&videoFoam=false"
  },
  
];

export const pricing = [
  {
    name: "Basic",
    price: "$60",
    metaInfo: "3-4 short videos",
    Detail:
      [
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"3-4 reels"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Personalized Branding"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Caption"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"1 Revisions"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Scheduling"
        },
      ],
  },
  {
    name: "Growth",
    price: "$160",
    metaInfo: "6-7 short videos",
    Detail:
      [
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"6-7 reels"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Personalized Branding"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Caption"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"2 Revision"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Color grading"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Motion graphics"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Background music"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Organic Growth"
        },
      ],
  },
  {
    name: "Advance Growth",
    price: "$240",
    metaInfo: "12 short videos",
    Detail:
      [
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"10-12 reels"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Personalized Branding"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Caption"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"4 Revision"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Color grading"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Motion graphics and sounds"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Background music"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Organic Growth"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Targeted Followers"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Full-time Engagement"
        },
        {
          src:"https://img.icons8.com/color/96/null/checked--v1.png",
          content:"Overall Instagram growth"
        },
      ],
  },

];

export const faqs = [
  {
    question: 'Why you choose me?',
    answer: "You'll get 100% MONEY BACK if you're not satisfied with my service, furthermore, I'm an influencer with over 116K real organic followers, which allows me to work with blue-check companies."
  },
  {
    question: 'Can I use my account during this service?',
    answer: "Yes, you can do your normal activities keep posting every day don't do any heavy follow/unfollow & likes As Instagram sets certain limits in these activities to protect the IG community from spammers.Nothing is good if it is overused"
  },
  {
    question: 'How do you target?',
    answer: "I use the follow and likes strategy to grab attention,we scrape real and active interested audiences from the hashtag & given pages. They get your attention and we get a connection with them Overall it leads to complete growth not only followers."
  },
  {
    question: 'How many followers will I GET?',
    answer: "Growing your follower base depends on various factors, including the quality and value you provide in your content. Generally, you can expect 3-30 new followers daily when you consistently offer informative and engaging content"
  },
  {
    question: 'What kind of videos can I edit with your service?',
    answer: "We can edit a wide variety of short-form videos, including reels, Instagram stories, TikTok videos, YouTube Shorts, and more! Whether it's funny clips, educational content, or product demos, our editor lets you unleash your creativity."
  },
  {
    question: 'What features does your service offer?',
    answer: "We pack a punch with features like trimming and cutting clips, adding music and sound effects, using text overlays and stickers, applying trendy filters and transitions, and much more! Explore and discover all the possibilities to create stunning short videos."
  },
  {
    question: 'Can I add text animations to my videos?',
    answer: 'Yes! We offer a variety of pre-made text animations to choose from, making it easy to add dynamic titles, captions, and call-to-actions to your videos.'
  },
  {
    question: 'What requirements do you need for Content ? ',
    answer: "Share your raw footage link (Google Drive/Dropbox etc.) Tell me what you want in your video Show me any inspiration where you like the editing style ,If not, no worries"
  }
];