export interface Coach {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  achievements: string[];
  experience: string;
  certifications: string[];
  specialty: string;
}

export interface Athlete {
  id: string;
  name: string;
  category: 'men' | 'exec';
  weightClass: string;
  image: string;
  record: string;
  highlights: string[];
  department: string;
  role?: string;
}

export interface Achievement {
  year: string;
  title: string;
  category: 'National' | 'State' | 'University' | 'Inter-College';
  description: string;
  athlete?: string;
  badge: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Tournament' | 'Trials' | 'Seminar' | 'Workshop';
  description: string;
  image: string;
  status: 'Upcoming' | 'Completed';
  registrationOpen: boolean;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  bwImage: string;
  colorImage: string;
  targetAudience: string;
  schedule: string;
  features: string[];
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Training' | 'Competition' | 'Championship' | 'Campus' | 'Facilities';
  image: string;
  type: 'image' | 'video';
  videoUrl?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'Sparring' | 'Mitt Work' | 'Technique' | 'Highlights' | 'Bag Workout' | 'Beach Workout' | 'Weight Training';
  duration: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

export interface MedalHolder {
  id: string;
  name: string;
  medal: 'Gold' | 'Silver' | 'Bronze';
  tournament: string;
  weightClass: string;
  year: string;
  department?: string;
  image: string;
}

export const COURSES: Course[] = [
  {
    id: "boxing",
    title: "Technical & Fundamental Boxing",
    slug: "boxing",
    subtitle: "Stance, Counter-Punching, Footwork & Ring Generalship",
    description: "Master the art of sweet science. From fundamental stance and guard mechanics to advanced shoulder rolls, counter-punching combinations, and tactical ring generalship under certified coaches.",
    bwImage: "/training photos/ring.webp",
    colorImage: "/training photos/ring.webp",
    targetAudience: "All Ages • Beginners to Competitive Boxers",
    schedule: "Mon to Sat • Morning & Evening Batches",
    features: ["Standard Boxing Rules", "Heavy Bag & Mitt Drills", "Coached Ring Sparring", "Video Technical Analysis"]
  },
  {
    id: "youth-cadets",
    title: "School & Youth Cadets",
    slug: "youth-cadets",
    subtitle: "Ages 8-17 • Character, Self-Defense & Agility",
    description: "Specialized junior boxing academy tailored for school children and teenagers. Builds focus, self-confidence, motor coordination, and self-defense using mandatory protective gear and non-contact/controlled drills.",
    bwImage: "/training photos/jnr medal.webp",
    colorImage: "/training photos/jnr medal.webp",
    targetAudience: "School Students (Ages 8 to 17)",
    schedule: "Mon, Wed, Fri • 04:00 PM - 05:30 PM",
    features: ["Youth Safety Gear Included", "School Games Prep", "Character & Focus Building", "Fun Agility Games"]
  },
  {
    id: "combat-fitness",
    title: "Combat Cardio & Fitness",
    slug: "combat-fitness",
    subtitle: "High-Intensity Calorie Burn & Boxing Conditioning",
    description: "Unleash your inner warrior without mandatory contact sparring. High-octane mitt workouts, heavy bag rounds, plyometric circuits, and core conditioning designed for working professionals and fitness enthusiasts.",
    bwImage: "/training photos/unnamed (2).webp",
    colorImage: "/training photos/unnamed (2).webp",
    targetAudience: "Working Professionals & Fitness Enthusiasts",
    schedule: "Mon to Sat • Morning 06:30 AM & Evening 05:30 PM",
    features: ["1,000+ Calorie Burn", "Zero Contact Sparring Required", "Stress Relief Mitt Work", "Core & Agility Circuits"]
  },
  {
    id: "advanced-sparring",
    title: "Advanced Sparring & Bouts",
    slug: "advanced-sparring",
    subtitle: "High-Pressure Ring Simulations & Tournament Prep",
    description: "Rigorous sparring sessions for athletes preparing for District, State, and All-India Inter-University Championships. Focuses on fight strategy, weight cut protocols, and referee-simulated bouts.",
    bwImage: "/training photos/unnamed (1).webp",
    colorImage: "/training photos/unnamed (1).webp",
    targetAudience: "Competitive Athletes & Tournament Boxers",
    schedule: "Tue, Thu, Sat • 05:30 PM - 08:30 PM",
    features: ["Full Competition Ring", "Refereed Simulation Bouts", "State & AIU Qualifiers", "Corner Strategy Coaching"]
  },
  {
    id: "recovery-mobility",
    title: "Active Recovery & Mobility",
    slug: "recovery-mobility",
    subtitle: "Combat Mobility, Joint Health & Conditioning",
    description: "Optimize combat performance and prevent injuries. Specialized post-fight mobility sessions, shoulder joint bulletproofing, hamstrings release, and deep breathing recovery protocols.",
    bwImage: "/training photos/beach.webp",
    colorImage: "/training photos/beach.webp",
    targetAudience: "All Members",
    schedule: "Saturdays • Morning Sessions",
    features: ["Combat Athlete Stretch", "Shoulder & Hip Mobility", "Myofascial Foam Rolling", "Recovery Protocols"]
  }
];

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  achievement: string;
  avatar: string;
}

export const CLUB_STATS = [
  { label: "Years of Heritage", value: "14+", suffix: "Years" },
  { label: "Active Boxers & Cadets", value: "250+", suffix: "Members" },
  { label: "State & National Medals", value: "70+", suffix: "Medals" },
  { label: "Age Groups Trained", value: "8 to 60+", suffix: "Years" },
  { label: "Annual Coached Hours", value: "3,000+", suffix: "Hours" },
];

export const WHY_CHOOSE_US = [
  {
    icon: "Trophy",
    title: "Professional Certified Coaching",
    description: "Train under National-certified coaches with proven expertise for kids, youth, college athletes, and adults."
  },
  {
    icon: "Users",
    title: "Open to School Children & Public",
    description: "Dedicated training programs for school children (ages 8+), youth cadets, university students, and working professionals."
  },
  {
    icon: "Dumbbell",
    title: "World-Class Equipment",
    description: "Full competition-sized ring, heavy leather bags, custom speed bags, combat conditioning turf, and weight training station."
  },
  {
    icon: "Flame",
    title: "High-Octane Atmosphere",
    description: "Forge unbreakable mental resilience, discipline, and physical fitness alongside passionate fighters of all age groups."
  },
  {
    icon: "Shield",
    title: "Youth Safety & Fundamentals",
    description: "Age-appropriate training with mandatory headguards, soft gloves, and step-by-step guidance for young school cadets."
  },
  {
    icon: "Award",
    title: "State, School & University Recognition",
    description: "Represent in School Games Federation, State Championships, District Bouts, and All-India Inter-University tournaments."
  }
];

export const COACHES: Coach[] = [
  {
    id: "head-coach-1",
    name: "Coach Rajesh 'The Phantom' Varma",
    role: "Head Coach & Technical Director",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop",
    bio: "Former National Amateur Champion with 18+ years of high-level coaching experience. Has trained over 15 All-India Inter-University medalists and 30+ Kerala State Champions.",
    achievements: ["2x Senior National Gold Medalist", "Best Coach Award - Kerala State Boxing 2022", "Certified IBA 2-Star International Coach"],
    experience: "18+ Years",
    certifications: ["IBA 2-Star Certified", "NIS Diploma in Sports Coaching", "Level 3 High-Performance Combat Trainer"],
    specialty: "Counter-Punching, Ring Generalship, & Mental Conditioning"
  },
  {
    id: "assistant-coach-2",
    name: "Coach Suresh Kumar",
    role: "Senior Assistant Coach & Mitt Specialist",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    bio: "Former Inter-University Medalist with 10+ years coaching experience in punch mechanics, ring movement, and junior cadet development.",
    achievements: ["Inter-University Silver Medalist", "Kerala State Amateur Gold Winner", "Certified Boxing Instructor"],
    experience: "10+ Years",
    certifications: ["State Boxing Federation Certified Coach", "Pad Work & Tactical Specialist"],
    specialty: "Footwork Mechanics, Mitt Drills, & Youth Fundamentals"
  },
  {
    id: "conditioning-coach-3",
    name: "Vikram 'Iron' Menon",
    role: "Strength & Conditioning Specialist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    bio: "Specializes in explosive power development, VO2 max endurance, weight management strategies, and injury prevention protocols for combat athletes.",
    achievements: ["Conditioned 5 National Championship Qualified Athletes", "Keynote Speaker on Sports Science"],
    experience: "11+ Years",
    certifications: ["CSCS (Certified Strength & Conditioning Specialist)", "Combat Cardio Specialist"],
    specialty: "Explosive Power, Weight Cut Safety, & Recovery Protocols"
  }
];

export const ATHLETES: Athlete[] = [
  {
    id: "m1",
    name: "Arjun 'Thunder' K.",
    category: "men",
    weightClass: "Middleweight (75 kg)",
    image: "https://images.unsplash.com/photo-1508215885820-4585e56135c8?q=80&w=600&auto=format&fit=crop",
    record: "18-2-0 (11 KOs)",
    highlights: ["All-India Inter-University Gold Medalist 2024", "Kerala State Champion 2023"],
    department: "B.Tech Mechanical Engineering"
  },
  {
    id: "m2",
    name: "Siddharth V.",
    category: "men",
    weightClass: "Lightweight (60 kg)",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    record: "14-3-0 (6 KOs)",
    highlights: ["Ernakulam District Gold Medalist", "Inter-College MVP"],
    department: "B.Tech Computer Science"
  },
  {
    id: "m3",
    name: "Rohan 'Viper' Das",
    category: "men",
    weightClass: "Welterweight (69 kg)",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=600&auto=format&fit=crop",
    record: "12-1-0 (8 KOs)",
    highlights: ["South Zone Inter-University Bronze 2024"],
    department: "M.Sc Marine Biology"
  },
  {
    id: "e1",
    name: "Karan Joseph",
    category: "exec",
    weightClass: "Heavyweight (91 kg)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    record: "Club Captain & Lead Strategist",
    highlights: ["Senior Team Captain 2024-25", "Organizing Secretary CUSAT Open"],
    department: "School of Management Studies",
    role: "Club President"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    year: "2024",
    title: "All-India Inter-University Boxing Championship",
    category: "National",
    description: "CUSAT Boxing Squad secured Gold and Silver medals, ranking top 5 amongst Indian Universities.",
    athlete: "Arjun K. (Gold Medalist)",
    badge: "National Triumph"
  },
  {
    year: "2023",
    title: "Kerala State Amateur Championship",
    category: "State",
    description: "Swept Gold medals across Men's Lightweight, Welterweight, and Middleweight divisions.",
    athlete: "CUSAT Varsity Squad",
    badge: "Overall State Champions"
  },
  {
    year: "2023",
    title: "South Zone Inter-University Tournament",
    category: "University",
    description: "Claimed the Championship Trophy with 4 Gold and 3 Bronze medals in Chennai.",
    badge: "Zone Winners"
  },
  {
    year: "2022",
    title: "CUSAT Invitational Inter-College Cup",
    category: "Inter-College",
    description: "Hosted over 25 colleges across South India, winning the Best Team Trophy.",
    badge: "Host Champions"
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "ev-1",
    title: "CUSAT Open Boxing Championship 2026",
    date: "2026-09-15",
    time: "09:00 AM - 06:00 PM IST",
    location: "CUSAT Arena & Indoor Stadium, Kochi",
    category: "Tournament",
    description: "The flagship annual open tournament bringing together top university fighters from across India. Bouts in 10 weight categories.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop",
    status: "Upcoming",
    registrationOpen: true
  },
  {
    id: "ev-2",
    title: "All-India Inter-University Selection Trials",
    date: "2026-10-02",
    time: "07:30 AM - 04:00 PM IST",
    location: "CUSAT Boxing High-Performance Center",
    category: "Trials",
    description: "Official trials to select the CUSAT Varsity squad for the upcoming AIU National Boxing Championship.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
    status: "Upcoming",
    registrationOpen: true
  },
  {
    id: "ev-3",
    title: "Elite Counter-Punching Masterclass",
    date: "2026-11-10",
    time: "04:00 PM - 07:00 PM IST",
    location: "CUSAT Ring Room",
    category: "Workshop",
    description: "Specialized tactical workshop on distance trapping, shoulder rolls, and explosive counter combinations led by Coach Rajesh Varma.",
    image: "https://images.unsplash.com/photo-1508215885820-4585e56135c8?q=80&w=1000&auto=format&fit=crop",
    status: "Upcoming",
    registrationOpen: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "CUSAT Ring Sparring & Tactical Bouts",
    category: "Training",
    image: "/training photos/ring.webp",
    type: "image",
    aspectRatio: "landscape"
  },
  {
    id: "g2",
    title: "Junior Cadet Championship Victory",
    category: "Championship",
    image: "/training photos/achieve.webp",
    type: "image",
    aspectRatio: "portrait"
  },
  {
    id: "g3",
    title: "Sunday Beach Outdoor Workout & Conditioning",
    category: "Campus",
    image: "/training photos/beach.webp",
    type: "image",
    aspectRatio: "landscape"
  },
  {
    id: "g4",
    title: "Head Coach Technical Mitt Work Clinic",
    category: "Training",
    image: "/training photos/master.webp",
    type: "image",
    aspectRatio: "square"
  },
  {
    id: "g5",
    title: "Junior Cadet State Boxing Medal Winners",
    category: "Championship",
    image: "/training photos/jnr medal.webp",
    type: "image",
    aspectRatio: "portrait"
  },
  {
    id: "g6",
    title: "CBSE School Games Boxing Medal Ceremony",
    category: "Competition",
    image: "/training photos/cbse medal.webp",
    type: "image",
    aspectRatio: "square"
  },
  {
    id: "g7",
    title: "All-India Inter-University Medal Presentation",
    category: "Championship",
    image: "/training photos/medal.webp",
    type: "image",
    aspectRatio: "portrait"
  },
  {
    id: "g8",
    title: "Junior Cadet Boxing Championship Victory Podium",
    category: "Competition",
    image: "/training photos/jnr medal1.webp",
    type: "image",
    aspectRatio: "landscape"
  },
  {
    id: "g9",
    title: "State Championship Medal Ceremony",
    category: "Championship",
    image: "/training photos/medal1.webp",
    type: "image",
    aspectRatio: "portrait"
  },
  {
    id: "g10",
    title: "Technical Guard & Counter Combination Drills",
    category: "Training",
    image: "/training photos/unnamed (1).webp",
    type: "image",
    aspectRatio: "landscape"
  },
  {
    id: "g11",
    title: "Heavy Bag Power & Combination Output",
    category: "Training",
    image: "/training photos/unnamed (2).webp",
    type: "image",
    aspectRatio: "landscape"
  },
  {
    id: "g12",
    title: "CUSAT Boxing Squad Group Conditioning",
    category: "Campus",
    image: "/training photos/unnamed.webp",
    type: "image",
    aspectRatio: "landscape"
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "heavy-bags",
    name: "Heavy Leather & Tear-Drop Bag Zone",
    description: "Lineup of heavy leather punching bags ranging from 40kg to 70kg, tear-drop uppercut bags, and double-end reflex bags for power strikes and combination drills.",
    image: "/training photos/unnamed (2).webp",
    features: ["Heavy Duty Leather Bags", "Uppercut Tear-Drop Bags", "Double-End Speed Balls", "Shock Absorbing Mounts"]
  },
  {
    id: "speed-reflex",
    name: "Speed Bag & Reflex Conditioning Zone",
    description: "Specialized speed bag platform and double-end reflex ball station for hand-eye coordination, timing, and shoulder endurance.",
    image: "/training photos/master.webp",
    features: ["Rapid Reflex Speed Balls", "Double-End Bungee Balls", "High-Density Platform", "Timing & Agility Drills"]
  },
  {
    id: "safety-gear",
    name: "Protective Gear & Mitt Station",
    description: "High-grade faceguards, headguards, groin guards, leather focus mitts, thai pads, and padded glove pairs for safe technical drills and guided sparring.",
    image: "/training photos/unnamed (1).webp",
    features: ["IBA Approved Headguards", "Faceguards & Padded Gloves", "Leather Focus Mitts", "Body Protector Shields"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "CUSAT Boxing didn't just teach me how to punch — it completely redefined my mental fortitude, work ethic, and ability to conquer fear under pressure.",
    name: "Arjun K.",
    role: "National Gold Medalist (75kg)",
    achievement: "B.Tech Mechanical '24",
    avatar: "https://images.unsplash.com/photo-1508215885820-4585e56135c8?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "t2",
    quote: "Joining the club as a beginner with zero combat background was the best decision. The step-by-step coaching and mitt work helped me build incredible endurance and focus.",
    name: "Siddharth V.",
    role: "District Gold Medalist (60kg)",
    achievement: "B.Tech Computer Science '25",
    avatar: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "t3",
    quote: "The discipline I forged inside the CUSAT ring was the single greatest asset for my career. The culture of relentless excellence here is unmatched.",
    name: "Rahul Chandran",
    role: "Former Club Captain",
    achievement: "Product Lead & Boxing Enthusiast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
  }
];

export const SPONSORS = [
  { name: "CUSAT Sports Council", logo: "🏆 CUSAT SPORTS" },
  { name: "Everlast Fightwear", logo: "🥊 EVERLAST" },
  { name: "Kerala Amateur Boxing Association", logo: "🇮🇳 KABA" },
  { name: "Venum Combat Sports", logo: "⚡ VENUM" },
  { name: "HydraFit Nutrition", logo: "💧 HYDRAFIT" },
  { name: "Titanium Athletics", logo: "🛡️ TITANIUM" }
];

export const MEMBERSHIP_TIERS = [
  {
    name: "CUSAT University Students",
    price: "₹500",
    period: "per month",
    popular: false,
    description: "Discounted athletic concession rate for enrolled CUSAT undergraduate & postgraduate students.",
    features: [
      "Valid CUSAT Student ID required",
      "Full access to daily coaching (05:30 PM - 08:30 PM)",
      "Ring sparring, heavy bag & reflex ball drills",
      "All-India Inter-University selection eligibility",
      "Certificate & university grace mark support"
    ]
  },
  {
    name: "General Public & All Members",
    price: "₹1,000",
    period: "per month",
    popular: true,
    description: "Open admission rate for school children, youth cadets, working professionals, and general public.",
    features: [
      "100% Open to all ages (School kids, youth & adults)",
      "Coaching under certified technical boxing directors",
      "Daily evening training (05:30 PM - 08:30 PM)",
      "Heavy bag zone, focus mitts & protective gear",
      "District & State championship pathway"
    ]
  }
];

export const WEEKLY_SCHEDULE = [
  { day: "Monday", morning: "06:30 AM - 08:30 AM (Cardio & Roadwork)", evening: "05:30 PM - 08:30 PM (Technical Stance & Footwork)" },
  { day: "Tuesday", morning: "06:30 AM - 08:30 AM (Bag Drills & Core)", evening: "05:30 PM - 08:30 PM (Punch Combinations & Bag Work)" },
  { day: "Wednesday", morning: "06:30 AM - 08:30 AM (Plyometrics & Sprints)", evening: "05:30 PM - 08:30 PM (Counter-Punching & Defense Slips)" },
  { day: "Thursday", morning: "06:30 AM - 08:30 AM (Athletic Plyometrics & Conditioning)", evening: "05:30 PM - 08:30 PM (Coached Ring Sparring)" },
  { day: "Friday", morning: "06:30 AM - 08:30 AM (Speed Bag & Reflex Drills)", evening: "05:30 PM - 08:30 PM (Refereed Simulation Bouts)" },
  { day: "Saturday", morning: "06:30 AM - 08:30 AM (Long Running & Outdoor Endurance)", evening: "05:30 PM - 08:30 PM (Heavy Bag & Sparring Session)" },
  { day: "Sunday", morning: "OFF (Rest Day)", evening: "OFF (Rest Day)" }
];

export const FAQS = [
  {
    question: "Is CUSAT Boxing Club open to school children and the general public?",
    answer: "Yes, 100%! CUSAT Boxing Club is open to EVERYONE — school children (ages 8+), youth cadets, university students, working professionals, and adult fitness enthusiasts from the community."
  },
  {
    question: "What age groups can join?",
    answer: "We train all age groups starting from school children (ages 8–17) in our Youth Cadet Division up to adults of any age in our Public & University Divisions."
  },
  {
    question: "Do school children receive special safety coaching?",
    answer: "Absolutely. Safety is our #1 priority for school children. Junior sessions focus on discipline, footwork, fitness, and light-touch/non-contact drills using mandatory protective headgear and padded gloves under certified coaches."
  },
  {
    question: "Do I need prior boxing experience to join?",
    answer: "No prior experience is needed! Over 60% of our members start as complete beginners. Our coaches guide you step-by-step from fundamental stance and guard to your personal fitness or competition goals."
  },
  {
    question: "What equipment and facilities are provided at the gym?",
    answer: "We have an official elevated boxing ring, heavy leather punching bags, uppercut bags, double-end speed balls, focus mitts, and protective headguards."
  },
  {
    question: "What are the training hours for school children vs adults?",
    answer: "Coaching sessions are conducted in the morning (06:30 AM - 08:30 AM) and evening (05:30 PM - 08:30 PM) for all members from Monday to Saturday."
  }
];

export const VIDEO_HIGHLIGHTS: VideoItem[] = [
  {
    id: "v-bag",
    title: "Heavy Leather Bag Workout",
    category: "Bag Workout",
    duration: "02:45",
    thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "/videos/bag-workout.mp4",
    description: "High-volume heavy leather bag rounds focusing on punch combinations, power output, and rhythm control."
  },
  {
    id: "v-beach",
    title: "Sunday Beach Outdoor Workout",
    category: "Beach Workout",
    duration: "03:20",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "/videos/sunday_beach_workout.mp4",
    description: "Special Sunday outdoor conditioning, sand sprints, sea-side mobility, and group cardio session."
  },
  {
    id: "v-sparing-ring",
    title: "Varsity Ring Sparring & Combination Movement",
    category: "Sparring",
    duration: "03:15",
    thumbnail: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "/videos/ring_sparing.mp4",
    description: "High-intensity controlled ring sparring session featuring varsity boxers practicing combinations, slip counters, and ring generalship."
  },
  {
    id: "v-sparing-tactical",
    title: "Tactical Counter-Punching & Ring Defense",
    category: "Sparring",
    duration: "04:10",
    thumbnail: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "/videos/sparing.mp4",
    description: "Technical coaching clinic on shoulder roll defenses, distance trapping, and counter jab execution led by Coach Rajesh Varma."
  },
  {
    id: "v-weights",
    title: "Combat Weight & Hypertrophy Session",
    category: "Weight Training",
    duration: "03:30",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "/videos/weight_training.mp4",
    description: "Dedicated Saturday evening weight lifting, barbell squats, kettlebell circuits, and athletic hypertrophy."
  },
  {
    id: "v-gameday",
    title: "Game Day Championship Bouts",
    category: "Highlights",
    duration: "04:50",
    thumbnail: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "/videos/game_day.mp4",
    description: "Full match action, referee-guided bouts, and championship medal victory celebrations from tournament meets."
  },
  {
    id: "v-outdoor",
    title: "Outdoor Mobility & Endurance Training",
    category: "Highlights",
    duration: "03:45",
    thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "/videos/outdoor_mobility.mp4",
    description: "Outdoor conditioning, sprint drills, and combat mobility exercises at the CUSAT athletics complex."
  }
];

export const MEDAL_HOLDERS: MedalHolder[] = [
  {
    id: "mh-1",
    name: "Arjun K.",
    medal: "Gold",
    tournament: "All-India Inter-University Boxing Championship",
    weightClass: "Light Welterweight (64 kg)",
    year: "2024",
    department: "School of Engineering, CUSAT",
    image: "/training photos/medal.webp"
  },
  {
    id: "mh-2",
    name: "Devanand S.",
    medal: "Gold",
    tournament: "Kerala State Amateur Boxing Championship",
    weightClass: "Middleweight (75 kg)",
    year: "2023",
    department: "Department of Physical Education",
    image: "/training photos/achieve.webp"
  },
  {
    id: "mh-3",
    name: "Rahul Varma",
    medal: "Silver",
    tournament: "All-India Inter-University Boxing Championship",
    weightClass: "Lightweight (60 kg)",
    year: "2024",
    department: "Department of Computer Science",
    image: "/training photos/medal1.webp"
  },
  {
    id: "mh-4",
    name: "Siddharth M.",
    medal: "Gold",
    tournament: "South Zone Inter-University Tournament",
    weightClass: "Welterweight (69 kg)",
    year: "2023",
    department: "School of Legal Studies",
    image: "/training photos/jnr medal.webp"
  },
  {
    id: "mh-5",
    name: "Karan Joseph",
    medal: "Gold",
    tournament: "CUSAT Invitational Inter-College Cup",
    weightClass: "Heavyweight (91 kg)",
    year: "2024",
    department: "School of Management Studies",
    image: "/training photos/jnr medal1.webp"
  },
  {
    id: "mh-6",
    name: "Akash Menon",
    medal: "Bronze",
    tournament: "National Youth Cadet Boxing Meet",
    weightClass: "Featherweight (57 kg)",
    year: "2023",
    department: "Department of Polymer Science",
    image: "/training photos/cbse medal.webp"
  }
];
