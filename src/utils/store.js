import { create } from "zustand";

export const useUserStore = create((set) => ({
  users: [
    {
      userId: 1,
      name: "Sarthak Teotia",
      email: "sarthak@example.com",
      phone: "123456789",
    },
    {
      userId: 2,
      name: "rishabh teotia",
      email: "rishabh@example.com",
      phone: "9876543210",
    },
    {
      userId: 3,
      name: "Vipin",
      email: "vipin@example.com",
      phone: "5551234567",
    },
  ],
  editUser: (userId, data) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.userId === userId ? { ...user, ...data } : user
      ),
    })),
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  deleteUser: (userId) =>
    set((state) => ({
      users: state.users.filter((user) => user.userId !== userId),
    })),
}));
