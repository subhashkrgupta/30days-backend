import { create } from "zustand";
import axiosInstance from "../utils/axios";

const useAuthStore = create((set) => ({
    // initial state
  isLoading: false,
  isError: false,
  error: null,

  user: null,
  accessToken: null,
  isAuthenticated: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  clearUser: () =>
    set({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      error: null,
    }),

  // =========================
  // LOGIN
  // =========================
  login: async (data) => {
    set({
      isLoading: true,
      isError: false,
      error: null,
    });

    try {
        // console.log("LOGIN DATA FROM ZUSTAND : ", data)
      const response = await axiosInstance.post("/login", data);

      const { user, accessToken } = response.data;

      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
      }

      set({
        user: user || null,
        accessToken: accessToken || null,
        isAuthenticated: true,
        isError: false,
        error: null,
      });

    //   window.dispatchEvent(new Event("auth:changed"));

      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Login failed";

      set({
        isError: true,
        isAuthenticated: false,
        error: message,
      });

      throw error;
    } finally {
      set({
        isLoading: false,
      });
    }
  },

  // =========================
  // REGISTER
  // =========================
  register: async (data) => {
    set({
      isLoading: true,
      isError: false,
      error: null,
    });

    try {
      const response = await axiosInstance.post("/register", data);

      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Registration failed";

      set({
        isError: true,
        error: message,
      });

      throw error;
    } finally {
      set({
        isLoading: false,
      });
    }
  },

  checkAuth: async() => {
    set({
      isLoading: true,
      isError: false,
      error: null,
    });

    try {
        const response = axiosInstance.get("/me")
        const {user, accessToken } = response.data;
        set({
            user: user || null,
            accessToken: accessToken || null,
            isAuthenticated: true,
            isError: false,
            error: null,
        });
    } catch (error) {
        const message =
        error.response?.data?.message || "Unauthorized User";

      set({
        isError: true,
        error: message,
      });

      throw error;
    }finally {
        set({
        isLoading: false,
      });
    }
  },

  // =========================
  // LOGOUT
  // =========================
  logout: async () => {
    set({
      isLoading: true,
      isError: false,
      error: null,
    });

    try {
      // Tell backend to logout / clear refresh cookie
      await axiosInstance.post("/logout");

      // Remove access token from browser
      localStorage.removeItem("accessToken");

      // Clear Zustand authentication state
      set({
        user: null,
        accessToken: null,
        isAuthenticated: false,
        isError: false,
        error: null,
      });

      // Notify other parts of the application
    //   window.dispatchEvent(new Event("auth:changed"));

      return true;
    } catch (error) {
      const message =
        error.response?.data?.message || "Logout failed";

      set({
        isError: true,
        error: message,
      });

      // Even if the API logout fails, remove local auth state.
      localStorage.removeItem("accessToken");

      set({
        user: null,
        accessToken: null,
        isAuthenticated: false,
      });

    //   window.dispatchEvent(new Event("auth:changed"));

      throw error;
    } finally {
      set({
        isLoading: false,
      });
    }
  },
}));

export default useAuthStore;
