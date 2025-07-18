import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

declare global {
    interface Window {
      recaptchaVerifier?: RecaptchaVerifier;
    }
  }
  

export default function AuthPage() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [userDetails, setUserDetails] = useState({ name: '', email: '' });
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const navigate = useNavigate();


    const handlePhoneSubmit = async () => {
        const formattedPhone = phone.startsWith('+') ? phone : `+91${phone}`;
      
        if (!window.recaptchaVerifier) {
          window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            size: 'invisible',
            callback: () => {},
          });
        }
      
        try {
          const confirmation = await signInWithPhoneNumber(auth, formattedPhone, window.recaptchaVerifier);
          setConfirmationResult(confirmation);
          setStep(2);
        } catch (error) {
          console.error('SMS not sent', error);
        }
      };
      

  const handleOtpVerify = async () => {
    try {
      await confirmationResult.confirm(otp);
      setStep(3); // Move to user details
    } catch (err) {
      console.error('Invalid OTP', err);
    }
  };

  const handleRegister = () => {
    // You can save details in your backend/db here
    console.log('User registered:', userDetails);
    navigate('/'); // redirect to home after register
  };

  useEffect(() => {
    if (!window.recaptchaVerifier && document.getElementById('recaptcha-container')) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {
          console.log("reCAPTCHA verified");
        },
      });
  
      window.recaptchaVerifier.render().catch(console.error);
    }
  }, [step]);
  
  return (
    <div className="max-w-md mx-auto p-6">
      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Enter Your Phone Number</h2>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
          />
          <div id="recaptcha-container"></div>
          <Button onClick={handlePhoneSubmit} className="mt-4 w-full">Send OTP</Button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
          <Input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="OTP"
          />
          <Button onClick={handleOtpVerify} className="mt-4 w-full">Verify OTP</Button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Complete Registration</h2>
          <Input
            value={userDetails.name}
            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
            placeholder="Full Name"
          />
          <Input
            value={userDetails.email}
            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            placeholder="Email"
            className="mt-2"
          />
          <Button onClick={handleRegister} className="mt-4 w-full">Continue</Button>
        </div>
      )}
    </div>
  );
}
