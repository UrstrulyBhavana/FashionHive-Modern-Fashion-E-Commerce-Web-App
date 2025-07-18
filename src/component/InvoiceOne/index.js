import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useHistory } from 'react-router-dom';
import img1 from '../../assets/img/invoice/invoice.svg';
import logo from '../../assets/img/logo.png';
import sign from '../../assets/img/invoice/sign.png';

const InvoiceOnes = () => {
  const history = useHistory();
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'FashionHive_Invoice',
    pageStyle: `
    @page {
      size: A4;
      margin: 20mm;
    }
    body {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
  `
  });

  return (
    <>
      <section className="theme-invoice-1 pb-100 print-invoice">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="back_btn_emial mb-4">
                <button className="theme-btn-one btn-black-overlay btn_sm" onClick={() => history.goBack()}>
                  <i className="fa fa-arrow-left mr-2"></i>Go Back
                </button>
              </div>

              <div className="invoice-wrapper" ref={componentRef}>
                <div className="invoice-header">
                  <div className="upper-icon">
                    <img src={img1} className="img-fluid" alt="svg" style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                  <div className="row header-content">
                    <div className="col-md-6">
                      <img src={logo} className="img-fluid" style={{ borderRadius: "6px", boxShadow: "0 10px 24px rgba(0,0,0,.15)"}} alt="FashionHive Logo" />
                      <div className="mt-md-4 mt-3">
                        <h4 className="mb-2">FashionHive - Born to Stand Out</h4>
                        <h4 style={{ color:"#670D2F", fontWeight: '500' }} className="mb-0">support@fashionhive.com</h4>
                      </div>
                    </div>
                    <div className="col-md-6 text-md-right mt-md-0 mt-4">
                      <h2>Invoice</h2>
                      <div className="mt-md-4 mt-3">
                        <h4 className="mb-2">2664 Tail Ends Road, ORADELL</h4>
                        <h4 className="mb-0">New Jersey, 07649</h4>
                      </div>
                    </div>
                  </div>
                  <div className="detail-bottom">
                    <ul>
                      <li><span>Issue Date:</span><h4>20 March, 2025</h4></li>
                      <li><span>Invoice No:</span><h4>FH-908452</h4></li>
                      <li><span>Email:</span><h4>support@fashionhive.com</h4></li> 
                    </ul>
                  </div>
                </div>

                <div className="invoice-body table-responsive-md">
                  <table className="table table-borderless mb-0">
                    <thead>
                      <tr>
                        <th style={{ fontWeight: 'bold' }}>#</th>
                        <th style={{ fontWeight: 'bold' }}>Product</th>
                        <th style={{ fontWeight: 'bold' }}>Price</th>
                        <th style={{ fontWeight: 'bold' }}>Qty</th>
                        <th style={{ fontWeight: 'bold' }}>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>Olive Luxe Satin Wrap Dress</td><td>$50</td><td>2</td><td>$100</td></tr>
                      <tr><td>2</td><td>Trendy Streetwear Jacket</td><td>$30</td><td>3</td><td>$90</td></tr>
                      <tr><td>3</td><td>High Heels – Midnight Black</td><td>$95</td><td>1</td><td>$95</td></tr>
                      <tr><td>4</td><td>Embroidered Clutch Bag</td><td>$95</td><td>1</td><td>$95</td></tr>
                      <tr><td>5</td><td>Fashion Accessories Combo Set</td><td>$95</td><td>1</td><td>$95</td></tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="2"></td>
                        <td colSpan="2"><strong>GRAND TOTAL</strong></td>
                        <td><strong>$475.00</strong></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="invoice-footer text-right">
                  <div className="authorise-sign">
                    <img src={sign} className="img-fluid" alt="Signature" />
                    <span className="line"></span>
                    <h6>Authorised Sign</h6>
                  </div>

                  <div className="buttons mt-3">
                    <button className="theme-btn-one btn-black-overlay btn_sm" onClick={handlePrint}>
                      Export as PDF
                    </button>
                    <button className="theme-btn-one btn-black-overlay btn_sm ml-2" onClick={() => window.print()}>
                      Print
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvoiceOnes;









