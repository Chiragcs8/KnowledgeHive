
const paypal = require('../../helpers/paypal.js')
const Order = require('../../models/Order.js')
const StudentCourses = require('../../models/StudentCourses.js')
const Course = require('../../models/Course.js')


const createOrder = async (req, res) => {
  try {
    const {
      userId,
      userName,
      userEmail,
      orderstatus,
      paymentMethod,
      paymentStatus,
      orderDate,
      paymentId,
      payerId,
      instructorId,
      instructorName,
      courseImage,
      courseTitle,
      courseId,
      coursePricing,
    } = red.body;

    const create_payment_json={
        intent:'sale',
        payer:{
            payment_method: 'paypal'
        }, 
        redirect_url: {
            return_url: `${process.env.CLIENT_URL}/payment-return`,
            cancel_url: `${process.env.CLIENT_URL}/payment-cancel`
        },
        transactions : [
            {
                item_list : {
                    items : [
                        {
                            name : courseTitle,
                            sku : courseId,
                            price : coursePricing,
                            currency : 'USD',
                            quantity : 1
                        }
                    ]
                },
                amount : {
                    currency : 'USD',
                    total : coursePricing.toFixed(2),
                },
                description : courseTitle
            },
        ]
    }

    paypal.payment.create(create_payment_json, async(error, paymentInfo)=>{
      if(error){
        console.log(error);
        
        return res.status(500).json({
          success: false,
          message: "Error while creating payment!",
        })
      }
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

const capturePaymentAndFinalizeOrder = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

module.exports = { createOrder, capturePaymentAndFinalizeOrder };
