# 📚 BiniTutor - Learning Management System

A modern, responsive Learning Management System (LMS) frontend that enables users to discover, enroll in, and learn from expert-led e-courses.

## 🎨 Design Specifications

- **Primary Color**: `#234756` (Dark blue-green for texts and buttons)
- **Secondary Color**: `#C66F3D` (Burnt orange for accents)
- **Background Primary**: `#ffffff` (White)
- **Background Secondary**: `#EAEAEA` (Light gray)
- **Fully responsive** mobile-friendly design

## 🛠️ Technologies Used

- **Bootstrap 5.3** - Responsive CSS framework
- **Chart.js** - Data visualization for learning progress and analytics
- **SweetAlert2** - Beautiful, customizable alert dialogs
- **DataTables** - Advanced table plugin for course management
- **Bootstrap Icons** - Comprehensive icon library
- **Vanilla JavaScript** - Custom utilities and interactions

## 📁 Project Structure

```
binitutor/
├── index.html                    # Landing/Home page
├── courses.html                  # Course catalog with filters
├── course-detail.html           # Detailed course information
├── student-dashboard.html       # Student learning dashboard
├── instructor-dashboard.html    # Instructor course management
├── login.html                   # User authentication
├── register.html                # New user registration
├── assets/
│   ├── css/
│   │   └── style.css           # Custom styles with CSS variables
│   ├── js/
│   │   └── main.js             # Utility functions and app logic
│   └── images/                 # Image assets
└── ReadMe.MD                    # Project documentation
```

## 🌟 Features

### For Students
- Browse and search through course catalog
- Filter courses by category, level, and price
- View detailed course information with curriculum
- Track learning progress with visual charts
- Personal dashboard with stats and recommendations
- Wishlist and shopping cart functionality
- Certificate tracking

### For Instructors
- Comprehensive course management dashboard
- Student enrollment tracking
- Revenue analytics with Chart.js visualizations
- DataTables-powered course list with sorting and search
- Review management
- Performance metrics and statistics

### General Features
- Responsive navigation with mobile menu
- Social authentication options (Google, Facebook)
- Password strength indicator
- Newsletter subscription
- Smooth scrolling animations
- LocalStorage for cart and wishlist persistence
- Beautiful SweetAlert2 notifications

## 📄 Pages Overview

### 1. Home Page (index.html)
- Hero section with call-to-action
- Feature highlights
- Popular courses showcase
- Platform statistics
- Footer with social links

### 2. Courses Page (courses.html)
- Sidebar filters (category, level, price)
- Search functionality
- Sorting options (popularity, price, rating)
- Course grid with pagination
- Course cards with ratings and student count

### 3. Course Detail Page (course-detail.html)
- Video preview
- Course curriculum with collapsible sections
- What you'll learn section
- Requirements and description
- Instructor profile
- Student reviews
- Enrollment sidebar with pricing

### 4. Student Dashboard (student-dashboard.html)
- Learning statistics cards
- Chart.js progress visualization
- Category distribution pie chart
- Continue learning section
- Recent activity timeline
- Recommended courses

### 5. Instructor Dashboard (instructor-dashboard.html)
- Revenue and student statistics
- Monthly revenue bar chart
- Enrollment analytics
- DataTables course management table
- Recent reviews section
- Quick performance stats with progress bars

### 6. Login Page (login.html)
- Email/password authentication
- Social login options
- Password toggle visibility
- Remember me functionality
- Forgot password link

### 7. Register Page (register.html)
- Full name, email, password fields
- Password strength indicator
- Confirm password validation
- Role selection (Student/Instructor)
- Terms of service acceptance
- Social registration options

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - all pages are static HTML

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Navigate through the site using the navigation menu

### Quick Start
```bash
# Navigate to the project directory
cd binitutor

# Open the home page in your default browser
open index.html
# or
start index.html  # Windows
# or
xdg-open index.html  # Linux
```

## 💡 Usage Examples

### Adding a Course to Cart
```javascript
BiniTutor.addToCart('course-123', 'Web Development Bootcamp', 49.99);
```

### Displaying a Notification
```javascript
BiniTutor.showSuccess('Success!', 'Your action was completed');
```

### Validating Email
```javascript
if (BiniTutor.validateEmail(email)) {
    // Email is valid
}
```

## 🎯 Key Components

### Custom CSS Variables
```css
--primary-color: #234756;
--secondary-color: #C66F3D;
--bg-primary: #fff;
--bg-secondary: #EAEAEA;
```

### Utility Functions (main.js)
- `showSuccess()` - Success notifications
- `showError()` - Error alerts
- `addToCart()` - Shopping cart management
- `addToWishlist()` - Wishlist functionality
- `formatCurrency()` - Currency formatting
- `validateEmail()` - Email validation

## 📊 Data Visualization

### Student Dashboard Charts
- **Line Chart**: Learning progress over time (hours learned per month)
- **Doughnut Chart**: Course category distribution

### Instructor Dashboard Charts
- **Bar Chart**: Monthly revenue tracking
- **Pie Chart**: Student enrollment breakdown

## 🔒 Local Storage Usage

The application uses browser localStorage for:
- Shopping cart items
- Wishlist courses
- User preferences (future implementation)

## 📱 Responsive Design

All pages are fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Palette

| Usage | Color | Hex Code |
|-------|-------|----------|
| Primary | Dark Blue-Green | `#234756` |
| Secondary | Burnt Orange | `#C66F3D` |
| Background | White | `#ffffff` |
| Secondary BG | Light Gray | `#EAEAEA` |
| Success | Green | `#28a745` |
| Warning | Yellow | `#ffc107` |
| Danger | Red | `#dc3545` |

## 🔮 Future Enhancements

- Backend API integration
- Real user authentication
- Payment gateway integration
- Video streaming functionality
- Live chat support
- Course creation wizard
- Advanced analytics
- Mobile app version
- Multi-language support

## 📝 License

This project is created for educational and portfolio purposes.

## 👨‍💻 Author

Created as part of the BiniTutor Learning Management System project.

## 📞 Support

For questions or support, please refer to the contact section on the website.

---

**Last Updated**: February 1, 2026




