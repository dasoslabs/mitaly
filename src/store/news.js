import { create } from "zustand"
import axiosInstance from "@/libs/axios"

const PAGE_SIZE = 5

const useNewsStore = create((set, get) => ({
  currentPage: 1,
  newsList: {},
  totalPages: 0,
  loading: true,
  PAGE_SIZE,
  categories: [],
  setPosts: (page, data) =>
    set((state) => ({
      newsList: { ...state.newsList, [page]: data },
      loading: false,
    })),
  setTotalPages: (totalPages) => set({ totalPages }),
  setLoading: (loading) => set({ loading }),
  setCurrentPage: (page) => set({ currentPage: page }),
  fetchCategories: async () => {
    try {
      const { data } = await axiosInstance.get("/api/news/category")
      set({ categories: [{ id: 0, name: "전체" }, ...data] })
    } catch (e) {
      console.error(e)
    }
  },
  fetchTotalPages: async () => {
    const { totalPages } = get()
    if (totalPages !== 0) {
      return
    }
    try {
      const { data } = await axiosInstance.get("/api/news/count")
      set({ totalPages: Math.ceil(data / PAGE_SIZE) })
    } catch (e) {
      console.error(e)
    }
  },
  fetchPagePosts: async (page) => {
    const { newsList, loading } = get()
    if (newsList[page]) {
      return
    }

    if (!loading) {
      set({ loading: true })
    }

    try {
      const { data } = await axiosInstance.get(
        `/api/news?page=${page}&limit=${PAGE_SIZE}`,
      )
      set((state) => ({
        newsList: { ...state.newsList, [page]: data },
      }))
    } catch (e) {
      console.error(e)
    } finally {
      set({ loading: false })
    }
  },
}))

export default useNewsStore
