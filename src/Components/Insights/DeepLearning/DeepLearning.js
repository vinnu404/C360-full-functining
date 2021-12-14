import React from 'react'

const DeepLearning = () => {
    return (
        <div>
            <div>
  <div className="insighthed powerbibanner">
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex align-items-center ">
          <div>
            <h4 className="wow fadeInUp animated">Insights</h4>
            <h3 className="wow fadeInUp animated">Deep Learning
            </h3>
            <p className="wow fadeInDown animated">Deep Learning is a subset of Machine Learning, which on the
              other hand is a subset of Artificial Intelligence</p>
          </div>
        </div>
        <div className="col-md-8 text-right">
          <img src="images/insighvideo.jpg" className="wow fadeInUp animated" />
        </div>
      </div>
    </div>
  </div>  
  <div className="whatmachine">
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h2 className="titleone wow fadeInUp animated">What is Deep Learning? 
            </h2>
            <p>Conventional machine learning methods tend to succumb to environmental
              changes whereas deep learning adapts to these changes by constant feedback
              and improving the model. Deep learning is facilitated by neural networks
              which mimic the neurons in the human brain and embed multiple-layer
              architecture (few visible and few hidden)</p></div>
        </div>
        <div className="col-md-6 text-right">
          <img src="images/depplearnimg.jpg" className="wow fadeInUp animated" />
        </div>
      </div>
    </div>
  </div>
  <div className="benfitscol">
    <div className="container">
      <h2 className="titleone wow fadeInUp animated">The benefits of Deep Learning</h2>
      <div className="row pad_t50">
        <div className="col-md-4">
          <div className="benfitcnt">
            <h5>Maximum utilization of
              unstructured data</h5>
            <p> For the majority of machine learning algorithms, it’s difficult to
              analyze unstructured data, which means it’s remaining
              unutilized and this is exactly where deep learning becomes
              useful</p>
            <a href="#" className="benfitlink"><img src="images/relatedarrow-b.png" className="wow fadeInUp animated" /></a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="benfitcnt">
            <h5> Elimination of the need for feature
              engineering</h5>
            <p>One of the biggest advantages of using a deep learning
              approach is its ability to execute feature engineering by itself.</p>
            <a href="#" className="benfitlink"><img src="images/relatedarrow-b.png" className="wow fadeInUp animated" /></a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="benfitcnt">
            <h5>Ability to deliver high-quality results </h5>
            <p>Humans get hungry or tired and sometimes make careless
              mistakes. When it comes to neural networks, this isn’t the
              case.
            </p>
            <a href="#" className="benfitlink"><img src="images/relatedarrow-b.png" className="wow fadeInUp animated" /></a>
          </div>
        </div>
      </div>
      <div className="row pad_t50">
        <div className="col-md-4">
          <div className="benfitcnt">
            <h5>Elimination of the need for
              data labeling</h5>
            <p>Data labeling can be an expensive and time-consuming job.
              With a deep learning approach, the need for well-labeled data
              becomes obsolete as the algorithms excel at learning without
              any guideline.</p>
            <a href="#" className="benfitlink"><img src="images/relatedarrow-b.png" className="wow fadeInUp animated" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="ourofferings">
    <div className="container">
      <h2 className="titleone wow fadeInUp animated">Ethics of Deep Learning</h2>
      <div className="row pad_t80">
        <div className="col-md-4">
          <div className="servicebox wow fadeInUp animated">
            <div><img src="images/transfer-learning.png " alt="Services" /></div>
            <h4>Transfer learning</h4>
            <p className="min-h100">The transfer learning approach is being used by most
              deep learning. It's a process which involves
              fine-tuning a pre-trained model.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="servicebox wow fadeInUp animated">
            <div><img src="images/training-scratch.png" alt="Services" /></div>
            <h4>Training from scratch</h4> 
            <p className="min-h100">In order to train a deep learning network from scratch,
              you’d need to capture a very large labeled dataset apart
              from designing a network architecture which will learn
              the features and mimic.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="servicebox wow fadeInUp animated">
            <div><img src="images/future-excution.png" alt="Services" /></div>
            <h4>Feature extraction
            </h4>
            <p className="min-h100">It’s a more specialized, slightly less common approach to
              deep learning where the network is used as a feature
              extractor. </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
export default DeepLearning;