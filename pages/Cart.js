import React from 'react'
import css from '../styles/Cart.module.css'
import Head from 'next/head'
import img2 from '../assets/img2.png'
import img6 from '../assets/img6.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import Image from 'next/image'


function Cart() {
    return (
        <>
        <Head>
        <title>this is using bootstrap</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>

    </Head>
            <div className={css.container}>
                <div class="table-responsive" className={css.details}>
                <table class="table">
  <thead>
    <tr>
      <th class="table-primary align-middle " scope="col">item no</th>
      <th class="table-primary align-middle " scope="col">Image</th>
      <th class="table-primary align-middle " scope="col">Name</th>
      <th class="table-primary align-middle " scope="col">Price</th>
      <th class="table-primary align-middle " scope="col">Quantitiy</th>
      <th class="table-primary align-middle " scope='col'>Total Prize</th>
      <th class="table-primary align-middle " scope='col'> Remove</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <th scope="row">1</th>
      <td><Image src={img5} height={200} width={100}/></td>
      <td class="fw-semibold text-xl align-middle" >Pizza</td>
      <td class="fw-semibold text-xl align-middle" >$12</td>
      <td class="fw-semibold text-xl align-middle" >3</td>
      <td class="fw-semibold text-xl align-middle" >{3*12}</td>
      <td><button type="button" className="btn btn-danger color-red">Remove</button></td>
    </tr>
    <tr>
      <th  class="fw-semibold text-xl" scope="row">2</th>
      <td class="fw-semibold text-xl  align-middle" ><Image src={img2} height={200} width={100}/></td>
      <td class="fw-semibold text-xl  align-middle" >Burger</td>
      <td class="fw-semibold text-xl align-middle" >$10</td>
      <td class="fw-semibold text-xl align-middle" >5</td>
      <td class="fw-semibold text-xl align-middle" >{5*10}</td>
      <td><button type="button" className="btn btn-danger color-red">Remove</button></td>
    </tr>

    <tr>
      <th  class="fw-semibold text-xl" scope="row">3</th>
      <td  ><Image src={img4} height={200} width={100}/></td>
      <td class="fw-semibold text-xl align-middle" >Burger</td>
      <td class="fw-semibold text-xl align-middle" >$15</td>
      <td class="fw-semibold text-xl align-middle" >3</td>
      <td class="fw-semibold text-xl align-middle" >{4*15}</td>
      <td><button type="button" className="btn btn-danger color-red">Remove</button>
</td>
    </tr>
  </tbody>
</table>
                   
                </div>
            </div>

<section>

      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Summary</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>$53.98</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p class="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>$53.98</strong></span>
              </li>
            </ul>

            <button type="button" class="mbtn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
</section>
        </>


    )
}

export default Cart