export const healthStatusData = [
  {
    id: 'heart',
    label: 'Healthy Heart',
    status: 'healthy',
    color: '#4CAF50',
    position: { top: '25%', left: '45%' }
  },
  {
    id: 'lungs',
    label: 'Lungs',
    status: 'warning',
    color: '#F44336',
    date: 'Next 24 Oct 2021',
    position: { top: '20%', right: '20%' }
  },
  {
    id: 'teeth',
    label: 'Teeth',
    status: 'healthy',
    color: '#4CAF50',
    date: 'Next 24 Oct 2021',
    position: { top: '15%', right: '35%' }
  },
  {
    id: 'bone',
    label: 'Bone',
    status: 'warning',
    color: '#FF9800',
    date: 'Next 24 Oct 2021',
    position: { bottom: '25%', left: '35%' }
  }
];

export const healthCards = [
  {
    id: 'lungs',
    title: 'Lungs',
    icon: '🫁',
    status: 'warning',
    date: 'Next 24 Oct 2021',
    color: '#F44336'
  },
  {
    id: 'teeth',
    title: 'Teeth',
    icon: '🦷',
    status: 'healthy',
    date: 'Next 24 Oct 2021',
    color: '#4CAF50'
  },
  {
    id: 'bone',
    title: 'Bone',
    icon: '🦴',
    status: 'warning',
    date: 'Next 24 Oct 2021',
    color: '#FF9800'
  }
];

export const activityData = {
  title: 'Activity',
  subtitle: '3 appointments on this week',
  chartData: [
    { day: 'Mon', value: 20 },
    { day: 'Tues', value: 45 },
    { day: 'Wed', value: 30 },
    { day: 'Thurs', value: 60 },
    { day: 'Fri', value: 25 },
    { day: 'Sat', value: 40 },
    { day: 'Sun', value: 35 }
  ]
};
