import { createSlice } from "@reduxjs/toolkit";
const initalState = Array.from({ length: 120 }).map((_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 2 === 0 ? "Admin" : "User",
    department: i % 3 === 0 ? "HR" : "IT",
    status: i % 2 === 0 ? "Active" : "Inactive",
    createdAt: "2025-01-01",
    updatedAt: "2025-08-31",
    location: "Dhaka",
    phone: `+88012345${i}`,
    lastLogin: "2025-08-30",
    manager: "Manager Name",
    team: "Team A",
    projects: "Project X",
    notes: `Some notes ${i}`,
  }))

export const tableSlice = createSlice({
    name:'tableData',
    initialState:initalState,
    reducers:{

    }
})

export default tableSlice.reducer;