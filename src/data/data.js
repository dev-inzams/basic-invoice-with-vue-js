const invoice1 = {
    sender: 'John Doe',
    bill_to: 'Client A',
    ship_to: 'Client B',
    invoice_no: 'INV123',
    invoice_date: '2023-09-25',
    due_date: '2023-09-30',
    items: [
      {
        description: 'Item 1',
        quantity: 2,
        rate: 10.99,
      },
      {
        description: 'Item 2',
        quantity: 1,
        rate: 19.99,
      }
    ],
    note: 'This is a note',
    terms: 'Terms and Conditions',
    total: 39.98,
    tax: 5.45,
    grand_total: 44.93,
    balance_due: 4.93
}
const invoice2 = {
    sender: 'Jane Doe',
    bill_to: 'Client d',
    ship_to: 'Client dd',
    invoice_no: 'INV123',
    invoice_date: '2023-09-25',
    due_date: '2023-09-30',
    items: [
      {
        description: 'Item 1',
        quantity: 2,
        rate: 10.99,
      },
      {
        description: 'Item 2',
        quantity: 1,
        rate: 19.99,
      }
    ],
    note: 'This is a note',
    terms: 'Terms and Conditions',
    total: 39.98,
    tax: 5.45,
    grand_total: 44.93,
    balance_due: 4.93
}

export {invoice1, invoice2}