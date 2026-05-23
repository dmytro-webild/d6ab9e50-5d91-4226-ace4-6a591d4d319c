"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="large"
        background="blurBottom"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Programs",
          id: "products",
        },
        {
          name: "Faculty",
          id: "team",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      brandName="Gyan Ganga"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars",
      }}
      title="Master Your Exams, Build Your Future"
      description="Expert coaching for competitive exams with proven results. Learn from experienced faculty using proven methodologies tailored to your goals."
      tag="Trusted Coaching Partner"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/old-people-asking-professional-advice-from-financial-expert_482257-107450.jpg?_wi=1",
          imageAlt: "coaching centre classroom professional",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-teacher-writing_23-2148635321.jpg?_wi=1",
          imageAlt: "teacher coaching whiteboard student",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/students-writing-ideas-lecture-copy-space-screen-textbooks_482257-118772.jpg",
          imageAlt: "Students writing ideas for lecture next to copy space screen in textbooks",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-smart-light-haired-girl-with-bob-hairstyle-casual-clothes-sitting-chair-modern-library-reading-favourite-book-relaxing-after-long-day-study_176420-8324.jpg",
          imageAlt: "Young smart light-haired girl with bob hairstyle in casual clothes sitting on chair in modern library, reading favourite book, relaxing after long day on study",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/team-meeting-startups_23-2148898712.jpg",
          imageAlt: "Team meeting for startups",
        },
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Over 5,000+ Students Guided"
      tagIcon={Award}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      negativeCard={{
        items: [
          "No generic teaching methods",
          "No crowded classrooms",
          "No lack of individual guidance",
          "No outdated study materials",
          "No compromise on student focus",
        ],
      }}
      positiveCard={{
        items: [
          "Proven systematic curriculum",
          "Expert faculty mentorship",
          "Personalized performance tracking",
          "Weekly mock test analysis",
          "Dedicated doubt-clearing sessions",
        ],
      }}
      title="Why Choose Gyan Ganga?"
      description="We believe in structured learning and consistent progress tracking to help you succeed in competitive entrance exams."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "JEE Advanced Prep",
          price: "₹15,000",
          imageSrc: "http://img.b2bpic.net/free-photo/innovation-development-rocket-graphic-concept_53876-120019.jpg?_wi=1",
        },
        {
          id: "p2",
          name: "NEET Entrance Batch",
          price: "₹14,500",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-with-group-colored-pencils-selected-focus-red_1150-19819.jpg?_wi=1",
        },
        {
          id: "p3",
          name: "UPSC Foundation",
          price: "₹20,000",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-blue-t-shirt-drawing-graph-with-marker-flipchart-against-wallpaper_23-2147847549.jpg",
        },
        {
          id: "p4",
          name: "Class 12th Board Science",
          price: "₹10,000",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-floating-books-connected-by-ladders-education-day_23-2149241039.jpg",
        },
        {
          id: "p5",
          name: "Class 10th Foundation",
          price: "₹8,000",
          imageSrc: "http://img.b2bpic.net/free-photo/paper-craft-art-business-chart_53876-89434.jpg",
        },
        {
          id: "p6",
          name: "Maths Mastery",
          price: "₹6,000",
          imageSrc: "http://img.b2bpic.net/free-photo/graduation-high-school-university-concept-space-text_185193-110156.jpg",
        },
      ]}
      title="Our Coaching Programs"
      description="We offer specialized batches for various competitive exams designed for maximum student success."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "95%",
          description: "Pass Rate in Board Exams",
        },
        {
          id: "m2",
          value: "1200+",
          description: "Students Selected for JEE/NEET",
        },
        {
          id: "m3",
          value: "15+",
          description: "Years of Excellence",
        },
        {
          id: "m4",
          value: "50+",
          description: "Expert Educators",
        },
        {
          id: "m5",
          value: "100%",
          description: "Curriculum Completion",
        },
      ]}
      title="Our Success Metrics"
      description="Years of dedication have led to thousands of success stories."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      groups={[
        {
          id: "g1",
          groupTitle: "Academic Leaders",
          members: [
            {
              id: "tm1",
              title: "Dr. A. Sharma",
              subtitle: "Senior Physics Mentor",
              detail: "20 years of teaching expertise in JEE Physics.",
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-senior-businessman-library_1262-2398.jpg?_wi=1",
            },
            {
              id: "tm2",
              title: "Mr. R. Gupta",
              subtitle: "Maths Specialist",
              detail: "Renowned for simplifying complex calculus.",
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-senior-lecturer-with-arms-crossed_1262-1753.jpg",
            },
            {
              id: "tm3",
              title: "Ms. S. Verma",
              subtitle: "Biology Lead",
              detail: "Expertise in NEET-level medical biology.",
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-business-woman-posing_23-2149457736.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/old-people-asking-professional-advice-from-financial-expert_482257-107450.jpg?_wi=2",
          imageAlt: "professor teacher professional portrait",
        },
      ]}
      title="Our Expert Faculty"
      description="Learn from masters in their respective subjects."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Aryan R.",
          date: "Jan 2024",
          title: "JEE Aspirant",
          quote: "Gyan Ganga made learning physics easier than ever.",
          tag: "JEE-2024",
          avatarSrc: "http://img.b2bpic.net/free-photo/content-stylish-student-posing-table_23-2147666655.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/old-people-asking-professional-advice-from-financial-expert_482257-107450.jpg?_wi=3",
          imageAlt: "successful student portrait study",
        },
        {
          id: "t2",
          name: "Meera S.",
          date: "Feb 2024",
          title: "NEET Batch",
          quote: "The study material is excellent and well-structured.",
          tag: "NEET-2024",
          avatarSrc: "http://img.b2bpic.net/free-photo/cheerful-teenager-writing-notebook-looking-camera_23-2147860688.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-teacher-writing_23-2148635321.jpg?_wi=2",
          imageAlt: "successful student portrait study",
        },
        {
          id: "t3",
          name: "Rahul V.",
          date: "Mar 2024",
          title: "UPSC Student",
          quote: "Faculty mentorship guided me through the entire syllabus.",
          tag: "UPSC",
          avatarSrc: "http://img.b2bpic.net/free-photo/enthusiastic-young-woman-glasses-teacher-celebrating-raising-hand-up-cheering-tirumphing-with_1258-197338.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/innovation-development-rocket-graphic-concept_53876-120019.jpg?_wi=2",
          imageAlt: "successful student portrait study",
        },
        {
          id: "t4",
          name: "Priya K.",
          date: "Apr 2024",
          title: "Board Topper",
          quote: "Best coaching for consistency and practice.",
          tag: "Class 12",
          avatarSrc: "http://img.b2bpic.net/free-photo/girl-with-book-striped-shirt_1150-23.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-senior-businessman-library_1262-2398.jpg?_wi=2",
          imageAlt: "successful student portrait study",
        },
        {
          id: "t5",
          name: "Kabir P.",
          date: "May 2024",
          title: "JEE Aspirant",
          quote: "Structured learning led to my success.",
          tag: "JEE-2024",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-woman-laughing-study-session_23-2149265696.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-with-group-colored-pencils-selected-focus-red_1150-19819.jpg?_wi=2",
          imageAlt: "successful student portrait study",
        },
      ]}
      title="Student Success Stories"
      description="Real results from our motivated students."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "What are the timings?",
          content: "Classes are held from 8 AM to 6 PM.",
        },
        {
          id: "f2",
          title: "Is demo class available?",
          content: "Yes, we offer two days of free trial classes.",
        },
        {
          id: "f3",
          title: "Do you offer online classes?",
          content: "Yes, we have integrated hybrid learning options.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Need more information? Check our common questions."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "canvas-reveal",
      }}
      text="Start your journey toward academic excellence with Gyan Ganga today."
      buttons={[
        {
          text: "Schedule Consultation",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Gyan Ganga"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Blog",
              href: "#",
            },
            {
              label: "FAQs",
              href: "#faq",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
