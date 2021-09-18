import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"

const ContactPage = () => {
  const doSomething = () => {
    console.log("this is working")
  }
  return (
    <Layout>
      <div>This is the contact page</div>
      <Button action={doSomething}>Add</Button>
    </Layout>
  )
}

export default ContactPage
