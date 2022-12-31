const listings = [
  {
    id: 1,
    category: "Tech & Programming",
    Freelancer: {
      name: "Andrew Nelson",
      gender: "male",
      englishLevel: "fluent",
      type: "Individual",
      coverImg: `https://source.unsplash.com/pl9DrjAMV6I/200x300`,
      profilePic: `https://source.unsplash.com/1w9I6H4aftw/200x300`,
      profile: `Proident commodo Lorem commodo laborum cillum adipisicing esse sit nostrud ea.
      In velit id ullamco quis in proident incididunt ullamco commodo est. 
      Officia eiusmod do adipisicing quis labore commodo ut.mmodo consectetur sint aliqua proident voluptate incididunt pariatur Lorem et magna non id laboris incididunt. 
      Qui ut incididunt ea mollit adipisicing. Lorem cupidatat officia ea aliqua aute exercitation irure ea ea laborum. Incididunt nisi magna mollit consectetur sit voluptate ipsum sint nisi laboris laboris consectetur consectetur esse. Culpa dolore do magna laborum magna veniam commodo.`,
      title: "Andriod Developer",
      location: "Toronto",
      caption:
        "I will develop your andriod and ios app using fluter and ReactNative",
      startingPrice: 50,
      skills: ["Flutter", "ReactNative"],
      completedProject: 12,
      projectDetails: {
        heading: "About this gig",
        overview: `Etiam gravida euismod sodales. Vestibulum sed egestas sapien, 
        sit amet iaculis eros. Suspendisse pulvinar, erat sed interdum auctor,
         eros ligula tempus quam, in congue est nunc et turpis.
         Nam non nisi sed sem placerat semper.
         Proin egestas, odio eu semper mattis, enim odio pulvinar leo, ac vestibulum sapien nulla non arcu.
         
         Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in. 
         Sed vulputate euismod risus, eget auctor nulla aliquet sed
         `,
        duration: `1-2 weeks`,
        portfolio: [
          {
            id: 1,
            img: `https://source.unsplash.com/pl9DrjAMV6I`,
          },
          {
            id: 2,
            img: `https://source.unsplash.com/Px3iBXV-4TU`,
          },
          {
            id: 3,
            img: `https://source.unsplash.com/i1VQZsU86ok`,
          },
        ],
        packages: [
          {
            id: 1,
            packageName: "Basic",
            cost: 50,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Standard",
            cost: 100,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Premium",
            cost: 150,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
        ],

        reviews: [
          {
            id: 1,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 2,
            name: "John Doe",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 3,
            name: "Ireal King",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 4,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
        ],
      },
      education: [
        {
          id: 1,
          date: `2020-2022`,
          course: `Bachlors in Fine Arts`,
          college: `Modern College`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2019`,
          course: `Computer Science`,
          college: `Udemy`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
      work: [
        {
          id: 1,
          date: `2020-2019`,
          title: `UX Designer`,
          company: `DropPlus`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2016`,
          title: `Frontend Developer`,
          company: `Tech Hive`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
    },
  },
  {
    id: 2,
    category: `Design & Creatives`,
    Freelancer: {
      name: "Randy Spanklu",
      gender: "male",
      englishLevel: "fluent",
      type: "Individual",
      coverImg: `https://source.unsplash.com/H-LIL57PHCc/200x300`,

      profilePic: `https://source.unsplash.com/7YVZYZeITc8/200x300`,
      profile: `Proident commodo Lorem commodo laborum cillum adipisicing esse sit nostrud ea.
      In velit id ullamco quis in proident incididunt ullamco commodo est. 
      Officia eiusmod do adipisicing quis labore commodo ut.mmodo consectetur sint aliqua proident voluptate incididunt pariatur Lorem et magna non id laboris incididunt. 
      Qui ut incididunt ea mollit adipisicing. Lorem cupidatat officia ea aliqua aute exercitation irure ea ea laborum. Incididunt nisi magna mollit consectetur sit voluptate ipsum sint nisi laboris laboris consectetur consectetur esse.
      Culpa dolore do magna laborum magna veniam commodo.`,
      title: "Graphic Designer",
      location: "Ontario",
      caption:
        "Design aesthetically apealing  cover pages for your books and magazines",
      startingPrice: 60,
      skills: ["Photoshop", "Illustrator"],
      completedProject: 8,
      projectDetails: {
        heading: "About this gig",
        overview: `Etiam gravida euismod sodales. Vestibulum sed egestas sapien, 
        sit amet iaculis eros. Suspendisse pulvinar, erat sed interdum auctor,
         eros ligula tempus quam, in congue est nunc et turpis.
         Nam non nisi sed sem placerat semper.
         Proin egestas, odio eu semper mattis, enim odio pulvinar leo, ac vestibulum sapien nulla non arcu.
         
         Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in. 
         Sed vulputate euismod risus, eget auctor nulla aliquet sed
         `,
        duration: `1-2 weeks`,
        portfolio: [
          {
            id: 1,
            img: `https://source.unsplash.com/pl9DrjAMV6I`,
          },
          {
            id: 2,
            img: `https://source.unsplash.com/Px3iBXV-4TU`,
          },
          {
            id: 3,
            img: `https://source.unsplash.com/i1VQZsU86ok`,
          },
        ],
        packages: [
          {
            id: 1,
            packageName: "Basic",
            cost: 50,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Standard",
            cost: 100,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Premium",
            cost: 150,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
        ],

        reviews: [
          {
            id: 1,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 2,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 3,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 4,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
        ],
      },
      education: [
        {
          id: 1,
          date: `2020-2022`,
          course: `Bachlors in Fine Arts`,
          college: `Modern College`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2019`,
          course: `Computer Science`,
          college: `Udemy`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
      work: [
        {
          id: 1,
          date: `2020-2019`,
          title: `UX Designer`,
          company: `DropPlus`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2016`,
          title: `Frontend Developer`,
          company: `Tech Hive`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
    },
  },
  {
    id: 3,
    category: `Writing & Translation`,
    Freelancer: {
      name: "Kelvin Forson",
      type: "Individual",
      gender: "male",
      englishLevel: "fluent",
      coverImg: `https://source.unsplash.com/VkwRmha1_tI/200x300`,
      profilePic: `https://source.unsplash.com/C8Ta0gwPbQg/200x300`,
      profile: `Proident commodo Lorem commodo laborum cillum adipisicing esse sit nostrud ea.
      In velit id ullamco quis in proident incididunt ullamco commodo est. 
      Officia eiusmod do adipisicing quis labore commodo ut.mmodo consectetur sint aliqua proident voluptate incididunt pariatur Lorem et magna non id laboris incididunt. 
      Qui ut incididunt ea mollit adipisicing. Lorem cupidatat officia ea aliqua aute exercitation irure ea ea laborum. Incididunt nisi magna mollit consectetur sit voluptate ipsum sint nisi laboris laboris consectetur consectetur esse.
      Culpa dolore do magna laborum magna veniam commodo.`,
      title: "Transcription King",
      location: "Quebec",
      caption:
        "I will transcribe your conferences talks into writing materials ",
      startingPrice: 45,
      skills: ["Research", "Transcribing"],
      completedProject: 7,
      projectDetails: {
        heading: "About this gig",
        overview: `Etiam gravida euismod sodales. Vestibulum sed egestas sapien, 
        sit amet iaculis eros. Suspendisse pulvinar, erat sed interdum auctor,
         eros ligula tempus quam, in congue est nunc et turpis.
         Nam non nisi sed sem placerat semper.
         Proin egestas, odio eu semper mattis, enim odio pulvinar leo, ac vestibulum sapien nulla non arcu.
         
         Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in. 
         Sed vulputate euismod risus, eget auctor nulla aliquet sed
         `,
        duration: `1-2 weeks`,
        portfolio: [
          {
            id: 1,
            img: `https://source.unsplash.com/pl9DrjAMV6I`,
          },
          {
            id: 2,
            img: `https://source.unsplash.com/Px3iBXV-4TU`,
          },
          {
            id: 3,
            img: `https://source.unsplash.com/i1VQZsU86ok`,
          },
        ],
        packages: [
          {
            id: 1,
            packageName: "Basic",
            cost: 50,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Standard",
            cost: 100,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Premium",
            cost: 150,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
        ],

        reviews: [
          {
            id: 1,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 2,
            name: "John Andrew",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 3,
            name: "Same Samuel",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 4,
            name: "Gideon Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
        ],
      },
      education: [
        {
          id: 1,
          date: `2020-2022`,
          course: `Bachlors in Fine Arts`,
          college: `Modern College`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2019`,
          course: `Computer Science`,
          college: `Udemy`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
      work: [
        {
          id: 1,
          date: `2020-2019`,
          title: `UX Designer`,
          company: `DropPlus`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2016`,
          title: `Frontend Developer`,
          company: `Tech Hive`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
    },
  },
  {
    id: 4,
    category: `Music & Audio`,
    Freelancer: {
      name: "Slyvia Odine",
      type: "Individual",
      gender: "female",
      englishLevel: "fluent",
      coverImg: `https://source.unsplash.com/n_qhPU-nsyc/200x300`,

      profilePic: `https://source.unsplash.com/QXevDflbl8A/200x300`,
      profile: `Proident commodo Lorem commodo laborum cillum adipisicing esse sit nostrud ea.
      In velit id ullamco quis in proident incididunt ullamco commodo est. 
      Officia eiusmod do adipisicing quis labore commodo ut.mmodo consectetur sint aliqua proident voluptate incididunt pariatur Lorem et magna non id laboris incididunt. 
      Qui ut incididunt ea mollit adipisicing. Lorem cupidatat officia ea aliqua aute exercitation irure ea ea laborum. Incididunt nisi magna mollit consectetur sit voluptate ipsum sint nisi laboris laboris consectetur consectetur esse.
       Culpa dolore do magna laborum magna veniam commodo.`,
      title: "Voiceover Artist",
      location: "Quebec",
      caption: `I will create a high reach voice over for your product launch`,
      startingPrice: 60,
      skills: ["Sound Engineering", "Articulation"],
      completedProject: 7,
      projectDetails: {
        heading: "About this gig",
        overview: `Etiam gravida euismod sodales. Vestibulum sed egestas sapien, 
        sit amet iaculis eros. Suspendisse pulvinar, erat sed interdum auctor,
         eros ligula tempus quam, in congue est nunc et turpis.
         Nam non nisi sed sem placerat semper.
         Proin egestas, odio eu semper mattis, enim odio pulvinar leo, ac vestibulum sapien nulla non arcu.
         
         Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in. 
         Sed vulputate euismod risus, eget auctor nulla aliquet sed
         `,
        duration: `1-2 weeks`,
        portfolio: [
          {
            id: 1,
            img: `https://source.unsplash.com/pl9DrjAMV6I`,
          },
          {
            id: 2,
            img: `https://source.unsplash.com/Px3iBXV-4TU`,
          },
          {
            id: 3,
            img: `https://source.unsplash.com/i1VQZsU86ok`,
          },
        ],
        packages: [
          {
            id: 1,
            packageName: "Basic",
            cost: 50,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Standard",
            cost: 100,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Premium",
            cost: 150,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
        ],

        reviews: [
          {
            id: 1,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 2,
            name: "John Andrew",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 3,
            name: "Same Samuel",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 4,
            name: "Gideon Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
        ],
      },
      education: [
        {
          id: 1,
          date: `2020-2022`,
          course: `Bachlors in Fine Arts`,
          college: `Modern College`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2019`,
          course: `Computer Science`,
          college: `Udemy`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
      work: [
        {
          id: 1,
          date: `2020-2019`,
          title: `UX Designer`,
          company: `DropPlus`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2016`,
          title: `Frontend Developer`,
          company: `Tech Hive`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
    },
  },
  {
    id: 5,
    category: `Business`,
    Freelancer: {
      name: "Bruce Wayne",
      type: "Company",
      gender: "male",
      englishLevel: "fluent",
      coverImg: `https://source.unsplash.com/BeVGrXEktIk/200x300`,

      profilePic: `https://source.unsplash.com/mjRwhvqEC0U/200x300`,
      profile: `Proident commodo Lorem commodo laborum cillum adipisicing esse sit nostrud ea.
      In velit id ullamco quis in proident incididunt ullamco commodo est. 
      Officia eiusmod do adipisicing quis labore commodo ut.mmodo consectetur sint aliqua proident voluptate incididunt pariatur Lorem et magna non id laboris incididunt. 
      Qui ut incididunt ea mollit adipisicing. Lorem cupidatat officia ea aliqua aute exercitation irure ea ea laborum. Incididunt nisi magna mollit consectetur sit voluptate ipsum sint nisi laboris laboris consectetur consectetur esse.
      Culpa dolore do magna laborum magna veniam commodo.`,
      title: "Customer Support",
      location: "Quebec",
      caption: `I will answer all phone calls and chat requests from customers`,
      startingPrice: 20,
      skills: ["Research", "Support"],
      completedProject: 7,
      projectDetails: {
        heading: "About this gig",
        overview: `Etiam gravida euismod sodales. Vestibulum sed egestas sapien, 
        sit amet iaculis eros. Suspendisse pulvinar, erat sed interdum auctor,
         eros ligula tempus quam, in congue est nunc et turpis.
         Nam non nisi sed sem placerat semper.
         Proin egestas, odio eu semper mattis, enim odio pulvinar leo, ac vestibulum sapien nulla non arcu.
         
         Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in. 
         Sed vulputate euismod risus, eget auctor nulla aliquet sed
         `,
        duration: `1-2 weeks`,
        portfolio: [
          {
            id: 1,
            img: `https://source.unsplash.com/pl9DrjAMV6I`,
          },
          {
            id: 2,
            img: `https://source.unsplash.com/Px3iBXV-4TU`,
          },
          {
            id: 3,
            img: `https://source.unsplash.com/i1VQZsU86ok`,
          },
        ],
        packages: [
          {
            id: 1,
            packageName: "Basic",
            cost: 50,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Standard",
            cost: 100,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Premium",
            cost: 150,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
        ],

        reviews: [
          {
            id: 1,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 2,
            name: "John Andrew",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 3,
            name: "Same Samuel",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 4,
            name: "Gideon Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
        ],
      },
      education: [
        {
          id: 1,
          date: `2020-2022`,
          course: `Bachlors in Fine Arts`,
          college: `Modern College`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2019`,
          course: `Computer Science`,
          college: `Udemy`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
      work: [
        {
          id: 1,
          date: `2020-2019`,
          title: `UX Designer`,
          company: `DropPlus`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2016`,
          title: `Frontend Developer`,
          company: `Tech Hive`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
    },
  },
  {
    id: 6,
    category: `Sales & Marketing`,
    Freelancer: {
      name: "Christiana Hero",
      type: "Company",
      gender: "female",
      englishLevel: "fluent",
      coverImg: `https://source.unsplash.com/mr4JG4SYOF8/200x300`,
      profilePic: `https://source.unsplash.com/rDEOVtE7vOs/200x300`,
      profile: `Proident commodo Lorem commodo laborum cillum adipisicing esse sit nostrud ea.
      In velit id ullamco quis in proident incididunt ullamco commodo est. 
      Officia eiusmod do adipisicing quis labore commodo ut.mmodo consectetur sint aliqua proident voluptate incididunt pariatur Lorem et magna non id laboris incididunt. 
      Qui ut incididunt ea mollit adipisicing. Lorem cupidatat officia ea aliqua aute exercitation irure ea ea laborum. Incididunt nisi magna mollit consectetur sit voluptate ipsum sint nisi laboris laboris consectetur consectetur esse.
      Culpa dolore do magna laborum magna veniam commodo.`,
      title: "Digital Marketter",
      location: "Quebec",
      caption: `I market your digital products on social media channels`,
      startingPrice: 50,
      skills: ["Social Media", "Client Support"],
      completedProject: 7,
      projectDetails: {
        heading: "About this gig",
        overview: `Etiam gravida euismod sodales. Vestibulum sed egestas sapien, 
        sit amet iaculis eros. Suspendisse pulvinar, erat sed interdum auctor,
         eros ligula tempus quam, in congue est nunc et turpis.
         Nam non nisi sed sem placerat semper.
         Proin egestas, odio eu semper mattis, enim odio pulvinar leo, ac vestibulum sapien nulla non arcu.
         
         Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in. 
         Sed vulputate euismod risus, eget auctor nulla aliquet sed
         `,
        duration: `1-2 weeks`,
        portfolio: [
          {
            id: 1,
            img: `https://source.unsplash.com/pl9DrjAMV6I`,
          },
          {
            id: 2,
            img: `https://source.unsplash.com/Px3iBXV-4TU`,
          },
          {
            id: 3,
            img: `https://source.unsplash.com/i1VQZsU86ok`,
          },
        ],
        packages: [
          {
            id: 1,
            packageName: "Basic",
            cost: 50,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Standard",
            cost: 100,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Premium",
            cost: 150,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
        ],

        reviews: [
          {
            id: 1,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 2,
            name: "John Andrew",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 3,
            name: "Same Samuel",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 4,
            name: "Gideon Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
        ],
      },
      education: [
        {
          id: 1,
          date: `2020-2022`,
          course: `Bachlors in Fine Arts`,
          college: `Modern College`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2019`,
          course: `Computer Science`,
          college: `Udemy`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
      work: [
        {
          id: 1,
          date: `2020-2019`,
          title: `UX Designer`,
          company: `DropPlus`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2016`,
          title: `Frontend Developer`,
          company: `Tech Hive`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
    },
  },
  {
    id: 7,
    category: `Tech & Programming`,
    Freelancer: {
      name: "Joseph Plange",
      type: "Individual",
      gender: "male",
      englishLevel: "fluent",
      coverImg: `https://source.unsplash.com/pKRNxEguRgM/200x300`,
      profilePic: `https://source.unsplash.com/c_GmwfHBDzk/200x300`,
      profile: `Proident commodo Lorem commodo laborum cillum adipisicing esse sit nostrud ea.
      In velit id ullamco quis in proident incididunt ullamco commodo est. 
      Officia eiusmod do adipisicing quis labore commodo ut.mmodo consectetur sint aliqua proident voluptate incididunt pariatur Lorem et magna non id laboris incididunt. 
      Qui ut incididunt ea mollit adipisicing. Lorem cupidatat officia ea aliqua aute exercitation irure ea ea laborum. Incididunt nisi magna mollit consectetur sit voluptate ipsum sint nisi laboris laboris consectetur consectetur esse.
       Culpa dolore do magna laborum magna veniam commodo.`,
      title: "Fullstack Web Developer",
      location: "Quebec",
      caption: `I will build your full stack application in less than 24 hours`,
      startingPrice: 500,
      skills: ["JS", "Django"],
      completedProject: 7,
      projectDetails: {
        heading: "About this gig",
        overview: `Etiam gravida euismod sodales. Vestibulum sed egestas sapien, 
        sit amet iaculis eros. Suspendisse pulvinar, erat sed interdum auctor,
         eros ligula tempus quam, in congue est nunc et turpis.
         Nam non nisi sed sem placerat semper.
         Proin egestas, odio eu semper mattis, enim odio pulvinar leo, ac vestibulum sapien nulla non arcu.
         
         Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in. 
         Sed vulputate euismod risus, eget auctor nulla aliquet sed
         `,
        duration: `1-2 weeks`,
        portfolio: [
          {
            id: 1,
            img: `https://source.unsplash.com/pl9DrjAMV6I`,
          },
          {
            id: 2,
            img: `https://source.unsplash.com/Px3iBXV-4TU`,
          },
          {
            id: 3,
            img: `https://source.unsplash.com/i1VQZsU86ok`,
          },
        ],
        packages: [
          {
            id: 1,
            packageName: "Basic",
            cost: 50,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Standard",
            cost: 100,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Premium",
            cost: 150,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
        ],

        reviews: [
          {
            id: 1,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 2,
            name: "John Andrew",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 3,
            name: "Same Samuel",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 4,
            name: "Gideon Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
        ],
      },
      education: [
        {
          id: 1,
          date: `2020-2022`,
          course: `Bachlors in Fine Arts`,
          college: `Modern College`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2019`,
          course: `Computer Science`,
          college: `Udemy`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
      work: [
        {
          id: 1,
          date: `2020-2019`,
          title: `UX Designer`,
          company: `DropPlus`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2016`,
          title: `Frontend Developer`,
          company: `Tech Hive`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
    },
  },
  {
    id: 8,
    category: `Music & Audio`,
    Freelancer: {
      name: "Cindia Tasms",
      type: "Company",
      gender: "female",
      englishLevel: "fluent",
      coverImg: `https://source.unsplash.com/dX76Mts-LVM/200x300`,
      profilePic: `https://source.unsplash.com/_cvwXhGqG-o/200x300`,
      profile: `Proident commodo Lorem commodo laborum cillum adipisicing esse sit nostrud ea.
      In velit id ullamco quis in proident incididunt ullamco commodo est. 
      Officia eiusmod do adipisicing quis labore commodo ut.mmodo consectetur sint aliqua proident voluptate incididunt pariatur Lorem et magna non id laboris incididunt. 
      Qui ut incididunt ea mollit adipisicing. Lorem cupidatat officia ea aliqua aute exercitation irure ea ea laborum. Incididunt nisi magna mollit consectetur sit voluptate ipsum sint nisi laboris laboris consectetur consectetur esse.
      Culpa dolore do magna laborum magna veniam commodo.`,
      title: "Music Producer",
      location: "Quebec",
      caption: `I will master your music for commercial`,
      startingPrice: 99,
      skills: ["Music", "Production", "Audio"],
      completedProject: 7,
      projectDetails: {
        heading: "About this gig",
        overview: `Etiam gravida euismod sodales. Vestibulum sed egestas sapien, 
        sit amet iaculis eros. Suspendisse pulvinar, erat sed interdum auctor,
         eros ligula tempus quam, in congue est nunc et turpis.
         Nam non nisi sed sem placerat semper.
         Proin egestas, odio eu semper mattis, enim odio pulvinar leo, ac vestibulum sapien nulla non arcu.
         
         Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in. 
         Sed vulputate euismod risus, eget auctor nulla aliquet sed
         `,
        duration: `1-2 weeks`,
        portfolio: [
          {
            id: 1,
            img: `https://source.unsplash.com/pl9DrjAMV6I`,
          },
          {
            id: 2,
            img: `https://source.unsplash.com/Px3iBXV-4TU`,
          },
          {
            id: 3,
            img: `https://source.unsplash.com/i1VQZsU86ok`,
          },
        ],
        packages: [
          {
            id: 1,
            packageName: "Basic",
            cost: 50,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Standard",
            cost: 100,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Premium",
            cost: 150,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
        ],

        reviews: [
          {
            id: 1,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 2,
            name: "John Andrew",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 3,
            name: "Same Samuel",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 4,
            name: "Gideon Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
        ],
      },
      education: [
        {
          id: 1,
          date: `2020-2022`,
          course: `Bachlors in Fine Arts`,
          college: `Modern College`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2019`,
          course: `Computer Science`,
          college: `Udemy`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
      work: [
        {
          id: 1,
          date: `2020-2019`,
          title: `UX Designer`,
          company: `DropPlus`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2016`,
          title: `Frontend Developer`,
          company: `Tech Hive`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
    },
  },
  {
    id: 9,
    category: `Writing & Translation`,
    Freelancer: {
      name: "Jesica Rans",
      type: "Individual",
      gender: "female",
      englishLevel: "fluent",
      coverImg: `https://source.unsplash.com/uwpo02K55zw/200x300`,
      profilePic: `https://source.unsplash.com/l35dDPD3Gys/200x300`,
      profile: `Proident commodo Lorem commodo laborum cillum adipisicing esse sit nostrud ea.
      In velit id ullamco quis in proident incididunt ullamco commodo est. 
      Officia eiusmod do adipisicing quis labore commodo ut.mmodo consectetur sint aliqua proident voluptate incididunt pariatur Lorem et magna non id laboris incididunt. 
      Qui ut incididunt ea mollit adipisicing. Lorem cupidatat officia ea aliqua aute exercitation irure ea ea laborum. Incididunt nisi magna mollit consectetur sit voluptate ipsum sint nisi laboris laboris consectetur consectetur esse.
      Culpa dolore do magna laborum magna veniam commodo.`,
      title: "Life Coach",
      location: "Quebec",
      caption: `I will teach you how to generate  multiple income stream`,
      startingPrice: 99,
      skills: ["Coach", "Finance"],
      completedProject: 7,
      projectDetails: {
        heading: "About this gig",
        overview: `Etiam gravida euismod sodales. Vestibulum sed egestas sapien, 
        sit amet iaculis eros. Suspendisse pulvinar, erat sed interdum auctor,
         eros ligula tempus quam, in congue est nunc et turpis.
         Nam non nisi sed sem placerat semper.
         Proin egestas, odio eu semper mattis, enim odio pulvinar leo, ac vestibulum sapien nulla non arcu.
         
         Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in. 
         Sed vulputate euismod risus, eget auctor nulla aliquet sed
         `,
        duration: `1-2 weeks`,
        portfolio: [
          {
            id: 1,
            img: `https://source.unsplash.com/pl9DrjAMV6I`,
          },
          {
            id: 2,
            img: `https://source.unsplash.com/Px3iBXV-4TU`,
          },
          {
            id: 3,
            img: `https://source.unsplash.com/i1VQZsU86ok`,
          },
        ],
        packages: [
          {
            id: 1,
            packageName: "Basic",
            cost: 50,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Standard",
            cost: 100,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Premium",
            cost: 150,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
        ],

        reviews: [
          {
            id: 1,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 2,
            name: "John Andrew",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 3,
            name: "Same Samuel",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 4,
            name: "Gideon Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
        ],
      },
      education: [
        {
          id: 1,
          date: `2020-2022`,
          course: `Bachlors in Fine Arts`,
          college: `Modern College`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2019`,
          course: `Computer Science`,
          college: `Udemy`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
      work: [
        {
          id: 1,
          date: `2020-2019`,
          title: `UX Designer`,
          company: `DropPlus`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2016`,
          title: `Frontend Developer`,
          company: `Tech Hive`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
    },
  },
  {
    id: 10,
    category: `Video & Animation`,
    Freelancer: {
      name: "Alexis Hervs",
      type: "Individual",
      gender: "female",
      englishLevel: "fluent",
      coverImg: `https://source.unsplash.com/xWkRYoSf8_c/200x300`,
      profilePic: `https://source.unsplash.com/l3IHXOdMyHQ/200x300`,
      profile: `Proident commodo Lorem commodo laborum cillum adipisicing esse sit nostrud ea.
      In velit id ullamco quis in proident incididunt ullamco commodo est. 
      Officia eiusmod do adipisicing quis labore commodo ut.mmodo consectetur sint aliqua proident voluptate incididunt pariatur Lorem et magna non id laboris incididunt. 
      Qui ut incididunt ea mollit adipisicing. Lorem cupidatat officia ea aliqua aute exercitation irure ea ea laborum. Incididunt nisi magna mollit consectetur sit voluptate ipsum sint nisi laboris laboris consectetur consectetur esse.
      Culpa dolore do magna laborum magna veniam commodo.`,
      title: "Life Coach",
      location: "Quebec",
      caption: `I will convert your video into high resolution movie`,
      startingPrice: 99,
      skills: ["Videography", "Content Creation"],
      completedProject: 9,
      projectDetails: {
        heading: "About this gig",
        overview: `Etiam gravida euismod sodales. Vestibulum sed egestas sapien, 
        sit amet iaculis eros. Suspendisse pulvinar, erat sed interdum auctor,
         eros ligula tempus quam, in congue est nunc et turpis.
         Nam non nisi sed sem placerat semper.
         Proin egestas, odio eu semper mattis, enim odio pulvinar leo, ac vestibulum sapien nulla non arcu.
         
         Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in. 
         Sed vulputate euismod risus, eget auctor nulla aliquet sed
         `,
        duration: `1-2 weeks`,
        portfolio: [
          {
            id: 1,
            img: `https://source.unsplash.com/pl9DrjAMV6I`,
          },
          {
            id: 2,
            img: `https://source.unsplash.com/Px3iBXV-4TU`,
          },
          {
            id: 3,
            img: `https://source.unsplash.com/i1VQZsU86ok`,
          },
        ],
        packages: [
          {
            id: 1,
            packageName: "Basic",
            cost: 50,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Standard",
            cost: 100,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Premium",
            cost: 150,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
        ],

        reviews: [
          {
            id: 1,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 2,
            name: "John Andrew",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 3,
            name: "Same Samuel",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 4,
            name: "Gideon Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
        ],
      },
      education: [
        {
          id: 1,
          data: `2020-2022`,
          course: `Bachlors in Fine Arts`,
          college: `Modern College`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2019`,
          course: `Computer Science`,
          college: `Udemy`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
      work: [
        {
          id: 1,
          date: `2020-2019`,
          title: `UX Designer`,
          company: `DropPlus`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2016`,
          title: `Frontend Developer`,
          company: `Tech Hive`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
    },
  },
  {
    id: 11,
    category: `Lifestyle`,
    Freelancer: {
      name: "Krina Tams",
      type: "Individual",
      gender: "female",
      englishLevel: "fluent",
      coverImg: `https://source.unsplash.com/NTyBbu66_SI/200x300`,
      profilePic: `https://source.unsplash.com/EGVccebWodM/200x300`,
      profile: `Proident commodo Lorem commodo laborum cillum adipisicing esse sit nostrud ea.
      In velit id ullamco quis in proident incididunt ullamco commodo est. 
      Officia eiusmod do adipisicing quis labore commodo ut.mmodo consectetur sint aliqua proident voluptate incididunt pariatur Lorem et magna non id laboris incididunt. 
      Qui ut incididunt ea mollit adipisicing. Lorem cupidatat officia ea aliqua aute exercitation irure ea ea laborum. Incididunt nisi magna mollit consectetur sit voluptate ipsum sint nisi laboris laboris consectetur consectetur esse.
      Culpa dolore do magna laborum magna veniam commodo.`,
      title: "Dietician",
      location: "Toronto",
      caption: `I will teach you yoga and meditation exercises `,
      startingPrice: 210,
      skills: ["Dieting", "Health", "Meditation"],
      completedProject: 7,
      projectDetails: {
        heading: "About this gig",
        overview: `Etiam gravida euismod sodales. Vestibulum sed egestas sapien, 
        sit amet iaculis eros. Suspendisse pulvinar, erat sed interdum auctor,
         eros ligula tempus quam, in congue est nunc et turpis.
         Nam non nisi sed sem placerat semper.
         Proin egestas, odio eu semper mattis, enim odio pulvinar leo, ac vestibulum sapien nulla non arcu.
         
         Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in. 
         Sed vulputate euismod risus, eget auctor nulla aliquet sed
         `,
        duration: `1-2 weeks`,
        portfolio: [
          {
            id: 1,
            img: `https://source.unsplash.com/pl9DrjAMV6I`,
          },
          {
            id: 2,
            img: `https://source.unsplash.com/Px3iBXV-4TU`,
          },
          {
            id: 3,
            img: `https://source.unsplash.com/i1VQZsU86ok`,
          },
        ],
        packages: [
          {
            id: 1,
            packageName: "Basic",
            cost: 50,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Standard",
            cost: 100,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Premium",
            cost: 150,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
        ],

        reviews: [
          {
            id: 1,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 2,
            name: "John Andrew",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 3,
            name: "Same Samuel",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 4,
            name: "Gideon Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
        ],
      },
      education: [
        {
          id: 1,
          date: `2020-2022`,
          course: `Bachlors in Fine Arts`,
          college: `Modern College`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          data: `2020-2019`,
          course: `Computer Science`,
          college: `Udemy`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
      work: [
        {
          id: 1,
          date: `2020-2019`,
          title: `UX Designer`,
          company: `DropPlus`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2016`,
          title: `Frontend Developer`,
          company: `Tech Hive`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
    },
  },
  {
    id: 12,
    category: `Sales & Marketting`,
    Freelancer: {
      name: "Kingsley Kevian",
      type: "Company",
      gender: "male",
      englishLevel: "fluent",
      coverImg: `https://source.unsplash.com/v89zhr0iBFY/200x300`,
      profilePic: `https://source.unsplash.com/ILip77SbmOE/200x300`,
      profile: `Proident commodo Lorem commodo laborum cillum adipisicing esse sit nostrud ea.
      In velit id ullamco quis in proident incididunt ullamco commodo est. 
      Officia eiusmod do adipisicing quis labore commodo ut.mmodo consectetur sint aliqua proident voluptate incididunt pariatur Lorem et magna non id laboris incididunt. 
      Qui ut incididunt ea mollit adipisicing. Lorem cupidatat officia ea aliqua aute exercitation irure ea ea laborum. Incididunt nisi magna mollit consectetur sit voluptate ipsum sint nisi laboris laboris consectetur consectetur esse.
      Culpa dolore do magna laborum magna veniam commodo.`,
      title: "Digital Marketer",
      location: "Vancouver",
      caption: `I will develop a digital strategy for your brand`,
      startingPrice: 99,
      skills: ["Social Media", "Marketting"],
      completedProject: 23,
      projectDetails: {
        heading: "About this gig",
        overview: `Etiam gravida euismod sodales. Vestibulum sed egestas sapien, 
        sit amet iaculis eros. Suspendisse pulvinar, erat sed interdum auctor,
         eros ligula tempus quam, in congue est nunc et turpis.
         Nam non nisi sed sem placerat semper.
         Proin egestas, odio eu semper mattis, enim odio pulvinar leo, ac vestibulum sapien nulla non arcu.
         
         Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in. 
         Sed vulputate euismod risus, eget auctor nulla aliquet sed
         `,
        duration: `1-2 weeks`,
        portfolio: [
          {
            id: 1,
            img: `https://source.unsplash.com/pl9DrjAMV6I`,
          },
          {
            id: 2,
            img: `https://source.unsplash.com/Px3iBXV-4TU`,
          },
          {
            id: 3,
            img: `https://source.unsplash.com/i1VQZsU86ok`,
          },
        ],
        packages: [
          {
            id: 1,
            packageName: "Basic",
            cost: 50,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Standard",
            cost: 100,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
          {
            packageName: "Premium",
            cost: 150,
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
          },
        ],

        reviews: [
          {
            id: 1,
            name: "John Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 2,
            name: "John Andrew",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 3,
            name: "Same Samuel",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
          {
            id: 4,
            name: "Gideon Rexford",
            reviewDetails: `Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. 
         Suspendisse lacinia tortor sem, at condimentum nulla auctor in.`,
          },
        ],
      },
      education: [
        {
          id: 1,
          date: `2020-2022`,
          course: `Bachlors in Fine Arts`,
          college: `Modern College`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2019`,
          course: `Computer Science`,
          college: `Udemy`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
      work: [
        {
          id: 1,
          date: `2020-2019`,
          title: `UX Designer`,
          company: `DropPlus`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
        {
          id: 2,
          date: `2020-2016`,
          title: `Frontend Developer`,
          company: `Tech Hive`,
          details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        },
      ],
    },
  },
];

export default listings;
