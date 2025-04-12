// dashboard.js - Analytics and BI for user dashboard
class Dashboard {
    constructor(userId, activityTracker, mealAI, yogaAI) {
      this.userId = userId;
      this.activityTracker = activityTracker;
      this.mealAI = mealAI;
      this.yogaAI = yogaAI;
    }
  
    async getHealthSnapshot() {
      const activitySummary = this.activityTracker.getWeeklySummary();
      const mealPlan = await this.mealAI.generateMealPlan(1);
      const yogaRecommendation = this.yogaAI.recommendRoutine();
      
      return {
        fitness: {
          activitySummary,
          yogaRecommendation: yogaRecommendation.poses.map(
            p => this.yogaAI.posesLibrary[p].name
          ),
        },
        nutrition: {
          todaysMealPlan: mealPlan[0],
          nutritionScore: this._calculateNutritionScore(mealPlan[0]),
        },
        wellness: {
          stressLevel: this._estimateStressLevel(),
          recoveryScore: this._calculateRecoveryScore(),
        }
      };
    }
  
    _calculateNutritionScore(dayPlan) {
      // Simplified scoring algorithm
      const meals = [dayPlan.meals.breakfast, dayPlan.meals.lunch, dayPlan.meals.dinner];
      const totalCalories = meals.reduce((sum, meal) => sum + (meal?.nutrition?.calories || 0), 0);
      
      return Math.min(100, Math.round((totalCalories / this.mealAI.userPreferences.calorieTarget) * 100));
    }
  
    _estimateStressLevel() {
      // AI would analyze activity patterns, sleep data, etc.
      return 'moderate'; // low | moderate | high
    }
  
    _calculateRecoveryScore() {
      // Based on activity vs rest balance
      return 72; // 0-100 scale
    }
  
    async generateInsights() {
      // AI-powered insights
      return {
        mainInsight: "You've been consistent with morning yoga but could increase protein intake",
        recommendations: [
          "Try adding 20g protein to your breakfast",
          "Consider a 10-minute meditation before bed",
          "Your activity patterns suggest you'd benefit from a rest day tomorrow"
        ],
        progressTrend: "positive" // positive | neutral | negative
      };
    }
  }
  
  export default Dashboard;