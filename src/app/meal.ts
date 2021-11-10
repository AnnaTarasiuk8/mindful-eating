export interface Meal {
  id: number;
  type: string; // breakfast, lunch, dinner, snack
  name: string;
  quantity?: string;
  notes?: string;
  foodGroup: string; // fruit, vegetable, grain, protein, dairy
  time: string;
}
