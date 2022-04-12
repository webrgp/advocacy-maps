import { usePublishedTestimonyListing } from "../db"
import TestimoniesTable from "../TestimoniesTable/TestimoniesTable"

// the word "testimonies": In more general, commonly used, contexts, the plural form will also be testimony.  However, in more specific contexts, the plural form can also be testimonies e.g. in reference to various types of testimonies or a collection of testimonies.

// TODO: Fix this
const BillTestimonies = props => {
  const bill = props.bill
  const { items } = usePublishedTestimonyListing({
    billId: bill.BillNumber
  })
  const testimonies = items.status == "success" ? items.result : []

  return <TestimoniesTable testimonies={testimonies} />
}

export default BillTestimonies
