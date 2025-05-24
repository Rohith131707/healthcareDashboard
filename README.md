# Healthcare Dashboard

A beautiful, responsive healthcare dashboard built with React and Vite. This project demonstrates pixel-perfect recreation of a healthcare management interface with modern design principles.

## 🌟 Features

- **Modern Design**: Clean, professional healthcare dashboard interface
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile
- **Component-Based Architecture**: Modular React components for maintainability
- **Static Data Display**: Renders health data, appointments, and analytics from mock sources
- **Interactive UI Elements**: Hover effects and smooth transitions
- **Anatomical Visualization**: Human body illustration with health indicators

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Top navigation bar
│   ├── Sidebar.jsx      # Left navigation menu
│   ├── DashboardMainContent.jsx  # Main content container
│   ├── AnatomySection.jsx        # Human body with health indicators
│   ├── HealthStatusCards.jsx     # Health status cards
│   ├── CalendarView.jsx          # Calendar with appointments
│   ├── UpcomingSchedule.jsx      # Upcoming appointments
│   ├── ActivityFeed.jsx          # Activity chart
│   └── SimpleAppointmentCard.jsx # Reusable appointment card
├── data/                # Mock data sources
│   ├── navigationData.js        # Navigation menu items
│   ├── healthData.js            # Health status and activity data
│   ├── appointmentsData.js      # Appointment information
│   └── calendarData.js          # Calendar data
└── styles/              # Component-specific CSS files
```

## 🎨 Design Features

- **Color Palette**: Professional healthcare colors (blues, greens, whites)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Icons**: Lucide React icons for consistent iconography
- **Shadows & Borders**: Subtle depth and modern card designs
- **Animations**: Smooth hover effects and transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd healthcareDashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints for:
- **Desktop**: Full layout with sidebar and grid
- **Tablet**: Adapted layout with responsive grid
- **Mobile**: Stacked layout with collapsible navigation

## 🧩 Components Overview

### Header
- Healthcare logo
- Search functionality (display only)
- User profile and notifications
- Add button

### Sidebar
- Navigation menu with icons
- Active state highlighting
- Responsive collapse on mobile

### Dashboard Main Content
- Grid layout for optimal space usage
- Anatomy section with health indicators
- Calendar view with appointments
- Upcoming schedule
- Activity chart

### Anatomy Section
- Stylized human body illustration
- Health status indicators with colors
- Interactive health cards

### Calendar View
- Monthly calendar grid
- Appointment time slots
- Appointment cards with details

## 🎯 Technical Highlights

- **React Functional Components**: Modern React with hooks
- **CSS Custom Properties**: Consistent theming with CSS variables
- **Modular CSS**: Component-specific styling
- **Mock Data Integration**: Realistic data structure
- **Performance Optimized**: Efficient rendering and minimal re-renders

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is created for demonstration purposes.

## 🤝 Contributing

This is a demonstration project. Feel free to fork and modify for your own use cases.
