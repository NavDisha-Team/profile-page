        function changeLanguage(language) {
            var elements = document.querySelectorAll('[data-key]');
            elements.forEach(function (element) {
                var key = element.getAttribute('data-key');
                if (language === 'hi') {
                    element.textContent = translations.hindi[key] || key;
                } else {
                    element.textContent = translations.english[key] || key;
                }
            });
        }

        const translations = {
            english: {
                header: "Your NavDisha Profile",
                profileDetails: "Profile Details",
                fullName: "Full Name:",
                age: "Age:",
                income: "Monthly Income (in ₹):",
                financialGoal: "Financial Goal:",
                literacyLevel: "Financial Literacy Level:",
                preferredLanguage: "Preferred Language:",
                aadharCard: "Aadhaar Card:",
                editProfile: "Edit Profile"
            },
            hindi: {
                header: "आपकी नवदिशा प्रोफ़ाइल",
                profileDetails: "प्रोफ़ाइल विवरण",
                fullName: "पूरा नाम:",
                age: "उम्र:",
                income: "मासिक आय (₹ में):",
                financialGoal: "वित्तीय लक्ष्य:",
                literacyLevel: "वित्तीय साक्षरता स्तर:",
                preferredLanguage: "प्राथमिक भाषा:",
                aadharCard: "आधार कार्ड:",
                editProfile: "प्रोफ़ाइल संपादित करें"
            }
        }
