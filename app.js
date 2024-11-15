function generateBill() {
    const customerName = document.getElementById("customerName").value;
    const currentMonth = document.getElementById("currentMonth").value;
    const units = parseFloat(document.getElementById("units").value);
    const chargesPerUnit = parseFloat(document.getElementById("chargesPerUnit").value);
    const lateSurcharge = parseFloat(document.getElementById("lateSurcharge").value);


    if (!customerName || !currentMonth || !units || !chargesPerUnit || !lateSurcharge) {
        alert("Please fill in all the fields.");
        return;
    }

  
    const netAmount = (units * chargesPerUnit).toFixed(2);
    const grossAmount = (parseFloat(netAmount) + lateSurcharge).toFixed(2);


    const currentDate = new Date();
    const currentDateStr = currentDate.toLocaleString();

    const dueDate = new Date();
    dueDate.setDate(currentDate.getDate() + 10);
    const dueDateStr = dueDate.toLocaleDateString();


    const lateFine = 1500;

    const billHtml = `
        <h2>Bill Summary</h2>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Current Month:</strong> ${currentMonth}</p>
        <p><strong>Number of Units:</strong> ${units}</p>
        <p><strong>Charges per Unit:</strong> ₨${chargesPerUnit}</p>
        <p><strong>Net Amount Payable (within Due Date):</strong> ₨${netAmount}</p>
        <p><strong>Late Payment Surcharge:</strong> ₨${lateSurcharge}</p>
        <p><strong>Gross Amount Payable (after Due Date):</strong> ₨${grossAmount}</p>
        <p><strong>Due Date:</strong> ${dueDateStr}</p>
        <p><strong>Current Date & Time:</strong> ${currentDateStr}</p>
        <p><strong>Late Payment Fine (if paid after due date):</strong> ₨${lateFine}</p>
    `;

    document.getElementById("billResult").innerHTML = billHtml;
}
