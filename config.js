// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Bien",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🩷', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🐈‍⬛', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "Awww, just this much? :((",                                   // Text before the percentage
            nextBtn: "Here!❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌷", // The big question!
            yesBtn: "Of course!",                                             // Text for "Yes" button
            noBtn: "No."                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much palangga?? I love you moreeee! 🥰💝",  // Shows when they go past 5000%
        high: "Mooooooooreeeeeeeee!🚀💝",              // Shows when they go past 1000%
        normal: "Magtampo ko pag diri lang :("                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Looking forward to our simple date at your house, bby! ♡✧˚ ༘ ⋆｡♡˚",
        message: "Sorry, this is the only thing that I can do. I love you so much, baby. Cheers to celebrating more valentines together! Hugs and kisses! mwaaaaaaa",
        emojis: "⸜(｡˃ ᵕ ˂ )⸝♡"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#bf8c99",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#fee3e9",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ce99a7",     // Button color (should stand out against the background)
        buttonHover: "#fdd4de",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "##ebb7c5"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "40px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.0         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dtxsurc5w/video/upload/v1739365231/New_West_-_Those_Eyes_tgzyci.mp3", // Music streaming URL
        startText: "Click here!",        // Button text to start music
        stopText: "Enjoy the music :)",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
