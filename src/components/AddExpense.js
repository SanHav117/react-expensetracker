export default function AddExpense(){
    return(
        <div class="Addexpense">
        <hr style={{ width: '95%', border: '2px solid rgb(162, 198, 231)', borderRadius: '2px' }} />
        <hr style={{ width: '90%' }} />
        <br />
        <label >Purpose of transaction:</label>
        <select>
          <option >Transfer to family or friends</option>  
          <option >Loan Repayment</option>  
          <option >Rent</option>  
          <option >Deposit or Investment</option>  
          <option >Bill Payment</option>
          <option >Others</option>  
        </select>
        <br /><br />
        <label for="amount">Amount:</label>
        <input type="text" placeholder="Ex: 200000" />
        <br /><br />
        <button>Submit</button>
        <br /><br />
        <hr style={{ width: '90%' }} />
        <hr style={{ width: '95%', border: '2px solid rgb(162, 198, 231)', borderRadius: '2px' }} />
        
      </div>
    )
}