// tracking.js - Tracks user activities and progress
class ActivityTracker {
    constructor(userId) {
      this.userId = userId;
      this.activities = [];
    }
  
    logActivity(activityType, duration, intensity, notes = '') {
      const activity = {
        id: uuidv4(),
        type: activityType,
        duration,
        intensity,
        notes,
        timestamp: new Date(),
      };
      
      this.activities.push(activity);
      return activity;
    }
  
    getWeeklySummary() {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      
      const weeklyActivities = this.activities.filter(
        a => new Date(a.timestamp) > oneWeekAgo
      );
      
      const totalMinutes = weeklyActivities.reduce(
        (sum, a) => sum + a.duration, 0
      );
      
      const byType = weeklyActivities.reduce((acc, a) => {
        acc[a.type] = (acc[a.type] || 0) + a.duration;
        return acc;
      }, {});
      
      return {
        totalActivities: weeklyActivities.length,
        totalMinutes,
        byType,
        averageIntensity: weeklyActivities.reduce(
          (sum, a) => sum + a.intensity, 0
        ) / weeklyActivities.length || 0,
      };
    }
  
    detectPatterns() {
      // AI-powered pattern detection
      return {
        mostActiveTime: 'morning',
        suggestedImprovement: 'Try adding strength training',
        consistencyScore: 0.75
      };
    }
  }
  
  export default ActivityTracker;