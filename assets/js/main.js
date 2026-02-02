// BiniTutor Main JavaScript File

// Utility Functions
const BiniTutor = {
    // Show success notification
    showSuccess: (title, message) => {
        Swal.fire({
            icon: 'success',
            title: title,
            text: message,
            confirmButtonColor: '#234756',
            timer: 3000,
            timerProgressBar: true
        });
    },

    // Show error notification
    showError: (title, message) => {
        Swal.fire({
            icon: 'error',
            title: title,
            text: message,
            confirmButtonColor: '#234756'
        });
    },

    // Show warning notification
    showWarning: (title, message) => {
        Swal.fire({
            icon: 'warning',
            title: title,
            text: message,
            confirmButtonColor: '#234756'
        });
    },

    // Show info notification
    showInfo: (title, message) => {
        Swal.fire({
            icon: 'info',
            title: title,
            text: message,
            confirmButtonColor: '#234756'
        });
    },

    // Confirmation dialog
    confirm: (title, message, callback) => {
        Swal.fire({
            title: title,
            text: message,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#234756',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed && callback) {
                callback();
            }
        });
    },

    // Loading spinner
    showLoading: (message = 'Loading...') => {
        Swal.fire({
            title: message,
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
    },

    // Close loading spinner
    hideLoading: () => {
        Swal.close();
    },

    // Format currency
    formatCurrency: (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    },

    // Format date
    formatDate: (date) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    },

    // Validate email
    validateEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    // Debounce function
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Add to cart
    addToCart: (courseId, courseName, price) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Check if course already in cart
        if (cart.find(item => item.id === courseId)) {
            BiniTutor.showWarning('Already in Cart', 'This course is already in your cart');
            return;
        }
        
        cart.push({
            id: courseId,
            name: courseName,
            price: price,
            addedAt: new Date().toISOString()
        });
        
        localStorage.setItem('cart', JSON.stringify(cart));
        BiniTutor.showSuccess('Added to Cart', courseName + ' has been added to your cart');
        BiniTutor.updateCartCount();
    },

    // Get cart items
    getCart: () => {
        return JSON.parse(localStorage.getItem('cart')) || [];
    },

    // Update cart count badge
    updateCartCount: () => {
        const cart = BiniTutor.getCart();
        const badge = document.getElementById('cartCount');
        if (badge) {
            badge.textContent = cart.length;
            badge.style.display = cart.length > 0 ? 'inline' : 'none';
        }
    },

    // Remove from cart
    removeFromCart: (courseId) => {
        let cart = BiniTutor.getCart();
        cart = cart.filter(item => item.id !== courseId);
        localStorage.setItem('cart', JSON.stringify(cart));
        BiniTutor.updateCartCount();
    },

    // Clear cart
    clearCart: () => {
        localStorage.removeItem('cart');
        BiniTutor.updateCartCount();
    },

    // Add to wishlist
    addToWishlist: (courseId, courseName) => {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        
        if (wishlist.find(item => item.id === courseId)) {
            BiniTutor.showWarning('Already in Wishlist', 'This course is already in your wishlist');
            return;
        }
        
        wishlist.push({
            id: courseId,
            name: courseName,
            addedAt: new Date().toISOString()
        });
        
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        BiniTutor.showSuccess('Added to Wishlist', courseName + ' has been added to your wishlist');
    },

    // Get wishlist items
    getWishlist: () => {
        return JSON.parse(localStorage.getItem('wishlist')) || [];
    },

    // Remove from wishlist
    removeFromWishlist: (courseId) => {
        let wishlist = BiniTutor.getWishlist();
        wishlist = wishlist.filter(item => item.id !== courseId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    },

    // Smooth scroll to element
    scrollTo: (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    // Initialize tooltips
    initTooltips: () => {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    },

    // Initialize popovers
    initPopovers: () => {
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
    },

    // Search courses
    searchCourses: (query) => {
        // This would typically make an API call
        console.log('Searching for:', query);
        BiniTutor.showInfo('Search', 'Searching for: ' + query);
    },

    // Subscribe to newsletter
    subscribeNewsletter: (email) => {
        if (!BiniTutor.validateEmail(email)) {
            BiniTutor.showError('Invalid Email', 'Please enter a valid email address');
            return;
        }
        
        // Simulate API call
        BiniTutor.showLoading('Subscribing...');
        setTimeout(() => {
            BiniTutor.hideLoading();
            BiniTutor.showSuccess('Subscribed!', 'Thank you for subscribing to our newsletter');
        }, 1500);
    },

    // Initialize the application
    init: () => {
        console.log('BiniTutor initialized');
        
        // Update cart count on page load
        BiniTutor.updateCartCount();
        
        // Initialize Bootstrap components
        BiniTutor.initTooltips();
        BiniTutor.initPopovers();
        
        // Add smooth scrolling to anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    BiniTutor.scrollTo(targetId);
                }
            });
        });

        // Handle newsletter subscription
        const newsletterBtn = document.querySelector('.footer button[type="button"]');
        if (newsletterBtn) {
            newsletterBtn.addEventListener('click', () => {
                const emailInput = newsletterBtn.previousElementSibling;
                if (emailInput) {
                    BiniTutor.subscribeNewsletter(emailInput.value);
                    emailInput.value = '';
                }
            });
        }
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', BiniTutor.init);
} else {
    BiniTutor.init();
}

// Make BiniTutor globally accessible
window.BiniTutor = BiniTutor;

// Course interaction functions
function enrollInCourse(courseId, courseName, price) {
    BiniTutor.addToCart(courseId, courseName, price);
}

function addToWishlist(courseId, courseName) {
    BiniTutor.addToWishlist(courseId, courseName);
}

function shareCourse(courseName) {
    BiniTutor.confirm(
        'Share Course',
        'Share ' + courseName + ' with your friends?',
        () => {
            BiniTutor.showSuccess('Shared!', 'Course link copied to clipboard');
        }
    );
}

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Handle scroll animations
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }
    }
});

// Console welcome message
console.log('%cWelcome to BiniTutor! 📚', 'font-size: 20px; font-weight: bold; color: #234756;');
console.log('%cStart your learning journey today!', 'font-size: 14px; color: #C66F3D;');
