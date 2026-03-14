import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Shield, Database, Star } from 'lucide-react';
import './FeatureDetails.css';

export function FeatureDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Yahan aapka featuresData array aayega (jo aapne message mein bheja tha)
          
  const featuresData = [
  {
    id: 'fast-conversion',
    icon: <Zap className="w-12 h-12" />,
    title: 'Fast Conversion',
    description: 'Convert your files in seconds',
    details: [
      {
        heading: 'Lightning-Fast Processing',
        text: 'Our advanced conversion engine uses optimized algorithms and cloud processing to convert your PDF files to DOC format in just seconds. No waiting, no delays - just instant results with high-quality output.',
      },
      {
        heading: 'Optimized Algorithms',
        text: 'We use state-of-the-art machine learning models and intelligent text recognition to ensure your converted documents maintain perfect formatting, fonts, and layout structure.',
      },
      {
        heading: 'Cloud-Powered Technology',
        text: 'Our distributed cloud infrastructure can handle multiple conversions simultaneously, ensuring fast processing times even during peak usage hours.',
      },
      {
        heading: 'Batch Processing',
        text: 'Need to convert multiple files? Our batch processing feature allows you to upload and convert up to 20 files at once, saving you valuable time.',
      },
    ],
  },
  {
    id: 'secure',
    icon: <Shield className="w-12 h-12" />,
    title: '100% Secure',
    description: 'Your files are encrypted and secure',
    details: [
      {
        heading: 'SSL Encryption',
        text: 'We use industry-standard SSL encryption to protect your files during upload and conversion. All data transmitted between your browser and our servers is fully encrypted.',
      },
      {
        heading: 'Automatic File Deletion',
        text: 'All files are automatically deleted from our servers within 24 hours of upload. You can also manually delete your files immediately after conversion.',
      },
      {
        heading: 'Privacy First',
        text: 'Your privacy and data security are our top priorities. We never share, sell, or use your files for any purpose other than conversion. Your documents remain completely private.',
      },
      {
        heading: 'GDPR Compliant',
        text: 'We are fully compliant with GDPR and other international data protection regulations. Your data is handled with the utmost care and respect.',
      },
    ],
  },
  {
    id: 'no-limit',
    icon: <Database className="w-12 h-12" />,
    title: 'No File Size Limit',
    description: 'Convert files of any size',
    details: [
      {
        heading: 'Unlimited File Size',
        text: 'Whether you have a small 1-page document or a massive 1000-page PDF file, our system can handle it all. There are no restrictions on file size.',
      },
      {
        heading: 'Large Document Support',
        text: 'Convert technical manuals, books, reports, and other large documents without worrying about size limitations. Our servers are built to handle files of any size efficiently.',
      },
      {
        heading: 'High-Quality Output',
        text: 'Large files maintain the same high-quality conversion standards as smaller files. Every page is processed with precision and accuracy.',
      },
      {
        heading: 'Scalable Infrastructure',
        text: 'Our cloud infrastructure automatically scales to accommodate large file conversions, ensuring consistent performance regardless of file size.',
      },
    ],
  },
  {
    id: 'free-forever',
    icon: <Star className="w-12 h-12" />,
    title: 'Free Forever',
    description: 'No hidden charges or subscriptions',
    details: [
      {
        heading: 'Completely Free',
        text: 'Enjoy unlimited conversions completely free. No credit card required, no subscriptions, no hidden fees. We believe in providing quality tools that are accessible to everyone, forever.',
      },
      {
        heading: 'No Registration Required',
        text: 'Start converting immediately without creating an account or providing personal information. Just upload your file and convert - it\'s that simple.',
      },
      {
        heading: 'Unlimited Conversions',
        text: 'Convert as many files as you need, whenever you need. There are no daily or monthly limits on the number of conversions you can perform.',
      },
      {
        heading: 'Access All Features',
        text: 'All features are available to all users. No premium tiers, no locked features - everyone gets access to the full power of our conversion tools.',
      },
    ],
  },
];


  const feature = featuresData.find(f => f.id === id);

  if (!feature) return <div>Feature not found!</div>;

  return (
    <div className="details-container">
      <button onClick={() => navigate(-1)} className="back-btn">
        <ArrowLeft size={20} /> Back to Home
      </button>

      <div className="detail-section">
        <div style={{color: '#4A6CF7', marginBottom: '15px'}}>{feature.icon}</div>
        <h2>{feature.title}</h2>
        <p style={{color: '#6b7280', marginBottom: '30px'}}>{feature.description}</p>

        {feature.details.map((item, index) => (
          <div key={index} className="detail-item">
            <h4>{item.heading}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
