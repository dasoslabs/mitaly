import { create } from "zustand"
import axiosInstance from "@/libs/axios"

const PAGE_SIZE = 9

export const useNoticeStore = create((set, get) => ({
  currentPage: 1,
  posts: {},
  totalPages: 0,
  loading: true,
  PAGE_SIZE,
  setPosts: (page, data) =>
    set((state) => ({
      posts: { ...state.posts, [page]: data },
      loading: false,
    })),
  setTotalPages: (totalPages) => set({ totalPages }),
  setLoading: (loading) => set({ loading }),
  setCurrentPage: (page) => set({ currentPage: page }),
  fetchTotalPages: async () => {
    const { totalPages } = get()
    if (totalPages !== 0) {
      return
    }
    try {
      const { data } = await axiosInstance.get("/api/notice/count")
      set({ totalPages: Math.ceil(data / PAGE_SIZE) })
    } catch (e) {
      console.error(e)
    }
  },
  fetchPagePosts: async (page) => {
    const { posts, loading } = get()
    if (posts[page]) {
      return
    }

    if (!loading) {
      set({ loading: true })
    }
    try {
      const { data } = await axiosInstance.get(
        `/api/notice?page=${page}&limit=${PAGE_SIZE}`,
      )
      set((state) => ({
        posts: { ...state.posts, [page]: data },
      }))
    } catch (e) {
      console.error(e)
    } finally {
      set({ loading: false })
    }
  },
}))
