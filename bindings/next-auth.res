module Session = {
 type t = {
  user: {
    name: string,
    email: string,
    image: string,
  },
  expires: Date,
 }
}

module SessionProvider = {
  @module("next-auth/react/SessionProvider") @react.component
  external make: (
    ~session=Session.t,
  ) => React.element = "default"

}

