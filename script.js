// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Update aria-expanded
        const expanded = navMenu.classList.contains('active');
        navToggle.setAttribute('aria-expanded', expanded);
        
        // Change icon
        const icon = navToggle.querySelector('[data-lucide]');
        if (expanded) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            
            const icon = navToggle.querySelector('[data-lucide]');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    });
});

// State voter registration data
const stateVoterRegistration = {
    'AL': 'https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote',
    'AK': 'https://www.elections.alaska.gov/Core/voterregistration.php',
    'AZ': 'https://servicearizona.com/VoterRegistration/selectLanguage',
    'AR': 'https://www.sos.arkansas.gov/elections/voter-services/voter-registration',
    'CA': 'https://registertovote.ca.gov/',
    'CO': 'https://www.sos.state.co.us/voter/pages/pub/olvr/findVoterReg.xhtml',
    'CT': 'https://voterregistration.ct.gov/OLVR/welcome.do',
    'DE': 'https://ivote.de.gov/voterregistration',
    'FL': 'https://dos.myflorida.com/elections/for-voters/voter-registration/',
    'GA': 'https://registertovote.sos.ga.gov/GAOLVR/welcome.do#no-back-button',
    'HI': 'https://olvr.hawaii.gov/',
    'ID': 'https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ViewVoterRegistration.aspx',
    'IL': 'https://ova.elections.il.gov/',
    'IN': 'https://www.in.gov/sos/elections/voter-information/register-to-vote/',
    'IA': 'https://mymvd.iowadot.gov/Account/Login?ReturnUrl=%2FVoterRegistration',
    'KS': 'https://www.kdor.ks.gov/Apps/VoterReg/Default.aspx',
    'KY': 'https://elect.ky.gov/registertovote/Pages/default.aspx',
    'LA': 'https://www.sos.la.gov/ElectionsAndVoting/RegisterToVote/Pages/default.aspx',
    'ME': 'https://www.maine.gov/sos/cec/elec/voter-info/voterguide.html',
    'MD': 'https://voterservices.elections.maryland.gov/OnlineVoterRegistration/InstructionsStep1',
    'MA': 'https://www.sec.state.ma.us/ovr/',
    'MI': 'https://mvic.sos.state.mi.us/RegisterVoter',
    'MN': 'https://mnvotes.sos.state.mn.us/VoterRegistration/VoterRegistrationMain.aspx',
    'MS': 'https://www.sos.ms.gov/Elections-Voting/Pages/Voter-Registration-Information.aspx',
    'MO': 'https://www.sos.mo.gov/elections/goVoteMissouri/register',
    'MT': 'https://sosmt.gov/elections/vote/',
    'NE': 'https://www.nebraska.gov/apps-sos-voter-registration/',
    'NV': 'https://www.nvsos.gov/sosvoterservices/registration/step1.aspx',
    'NH': 'https://app.sos.nh.gov/Public/PartyInfo.aspx',
    'NJ': 'https://voter.svrs.nj.gov/register',
    'NM': 'https://portal.sos.state.nm.us/OVR/WebPages/InstructionsStep1.aspx',
    'NY': 'https://voterreg.dmv.ny.gov/MotorVoter/',
    'NC': 'https://www.ncsbe.gov/Voters/Registering-to-Vote',
    'ND': 'https://vip.sos.nd.gov/PortalList.aspx',
    'OH': 'https://olvr.ohiosos.gov/ovru/Identify.aspx',
    'OK': 'https://www.ok.gov/elections/Voter_Info/Register_to_Vote/',
    'OR': 'https://secure.sos.state.or.us/orestar/vr/register.do?lang=eng&source=SOS',
    'PA': 'https://www.pavoterservices.pa.gov/Pages/VoterRegistrationApplication.aspx',
    'RI': 'https://vote.sos.ri.gov/Home/RegistertoVote',
    'SC': 'https://info.scvotes.sc.gov/eng/ovr/start.aspx',
    'SD': 'https://sdsos.gov/elections-voting/voting/register-to-vote/default.aspx',
    'TN': 'https://ovr.govote.tn.gov/',
    'TX': 'https://www.votetexas.gov/register-to-vote/',
    'UT': 'https://secure.utah.gov/voterreg/index.html',
    'VT': 'https://olvr.vermont.gov/',
    'VA': 'https://www.elections.virginia.gov/citizen-portal/',
    'WA': 'https://voter.votewa.gov/WhereToVote.aspx',
    'WV': 'https://ovr.sos.wv.gov/Register/Landing',
    'WI': 'https://myvote.wi.gov/en-us/RegisterToVote',
    'WY': 'https://sos.wyo.gov/Elections/State/RegisteringToVote.aspx',
    'DC': 'https://www.dcboe.org/Voters/Register-To-Vote/Register-to-Vote'
};

// Handle state selection for voter registration
const stateSelect = document.getElementById('state-select');
const registerBtn = document.getElementById('register-btn');

if (stateSelect && registerBtn) {
    // Initially disable the button
    registerBtn.disabled = true;
    registerBtn.style.opacity = '0.6';
    registerBtn.style.cursor = 'not-allowed';

    stateSelect.addEventListener('change', function() {
        const selectedState = this.value;
        
        if (selectedState && stateVoterRegistration[selectedState]) {
            registerBtn.disabled = false;
            registerBtn.style.opacity = '1';
            registerBtn.style.cursor = 'pointer';
            registerBtn.textContent = 'Go to Registration';
        } else {
            registerBtn.disabled = true;
            registerBtn.style.opacity = '0.6';
            registerBtn.style.cursor = 'not-allowed';
            registerBtn.textContent = 'Select State First';
        }
    });

    registerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const selectedState = stateSelect.value;
        
        if (selectedState && stateVoterRegistration[selectedState]) {
            // Open the voter registration link in a new tab
            window.open(stateVoterRegistration[selectedState], '_blank');
            
            // Show success message
            showNotification('Redirecting to your state\'s voter registration page...', 'success');
        } else {
            showNotification('Please select a state first.', 'error');
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Show notification function
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#FFD700'};
        color: ${type === 'success' || type === 'error' ? '#ffffff' : '#000000'};
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        font-weight: 500;
        max-width: 300px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    } else {
        header.style.backgroundColor = 'var(--dark-gray)';
    }
});

// Add loading animation for the page
window.addEventListener('load', function() {
    // Add fade-in animation to main sections
    const sections = document.querySelectorAll('.hero, .about, .why-median, .register, .cta');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe cards and other elements
document.querySelectorAll('.about-card, .polarization-content, .register-form').forEach(el => {
    observer.observe(el);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @media (min-width: 769px) {
        .nav-menu.active {
            display: flex;
        }
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--dark-gray);
            flex-direction: column;
            padding: var(--spacing-lg);
            border-top: 1px solid var(--medium-gray);
            display: none;
            z-index: 1000;
        }
        
        .nav-menu.active {
            display: flex;
        }
        
        .nav-link {
            padding: var(--spacing-sm) 0;
            border-bottom: 1px solid var(--medium-gray);
        }
        
        .nav-link:last-child {
            border-bottom: none;
        }
    }
    
    .about-card:not(.animate-in) {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .about-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .polarization-content:not(.animate-in) {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .polarization-content.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .register-form:not(.animate-in) {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .register-form.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style); 