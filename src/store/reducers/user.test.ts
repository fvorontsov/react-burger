import { userSlice } from "./UserSlice";
import {
  clear,
  setIsAuthChecked,
  setUser,
  userLogin,
  userRegister,
} from "../actions/UserActions";

describe("User reducers", () => {
  const reducer = userSlice.reducer;

  const initialState = {
    user: null,
    isAuthChecked: false,
  };

  it("has initial state", () => {
    expect(reducer(undefined, { type: "test" })).toEqual(initialState);
  });

  it("should set user", function () {
    const user = {
      name: "test",
      email: "test",
    };
    expect(reducer(initialState, setUser(user))).toEqual({
      user: user,
      isAuthChecked: true,
    });
  });

  it("userRegister.fulfilled", () => {
    const user = {
      name: "test",
      email: "test",
    };

    expect(
      reducer(
        initialState,
        userRegister.fulfilled(user, "", { ...user, password: "x" })
      )
    ).toEqual({
      user: user,
      isAuthChecked: true,
    });
  });

  it("userLogin.fulfilled", () => {
    const user = {
      name: "test",
      email: "test",
    };

    expect(
      reducer(
        initialState,
        userLogin.fulfilled(user, "", { ...user, password: "x" })
      )
    ).toEqual({
      user: user,
      isAuthChecked: true,
    });
  });

  it("should set auth checked", function () {
    expect(reducer(initialState, setIsAuthChecked(true))).toEqual({
      user: null,
      isAuthChecked: true,
    });
  });

  it("should clear", function () {
    const user = {
      name: "test",
      email: "test",
    };

    const testState = {
      user: user,
      isAuthChecked: false,
    };

    expect(reducer(testState, clear)).toEqual({
      user: null,
      isAuthChecked: false,
    });
  });
});
