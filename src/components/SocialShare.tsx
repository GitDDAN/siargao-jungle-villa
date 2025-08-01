import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Share2, Facebook, Instagram, MessageCircle, Twitter, Copy, CheckCircle } from "lucide-react";

interface SocialShareProps {
  roomName?: string;
  availabilityDate?: string;
}

const SocialShare = ({ roomName = "Amazing rooms", availabilityDate = "Now" }: SocialShareProps) => {
  const [copied, setCopied] = useState(false);

  const shareText = `🏄‍♂️ ${roomName} available at Salamat Villa Siargao! 🌴
📅 Available: ${availabilityDate}
📍 5 minutes to Cloud 9 surf break
💻 High-speed WiFi for digital nomads
🌿 Jungle views & modern comfort

Book now: https://salamat-villa-siargao.lovable.app
#Siargao #SurfLodge #DigitalNomad #Philippines`;

  const bookingLink = "https://salamat-villa-siargao.lovable.app";

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(bookingLink)}&quote=${encodeURIComponent(shareText)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(bookingLink)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText)}`,
    instagram: `https://www.instagram.com/` // Instagram doesn't support direct sharing via URL
  };

  const handleShare = (platform: string) => {
    if (platform === 'instagram') {
      // For Instagram, we'll copy the text and open Instagram
      navigator.clipboard.writeText(shareText);
      window.open(shareUrls.instagram, '_blank');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      window.open(shareUrls[platform], '_blank');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-tropical-green transition-all duration-300"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share Availability
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-tropical-green">Share Room Availability</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg text-sm">
            <p className="font-semibold text-gray-800 mb-2">Share this post:</p>
            <p className="text-gray-600">{shareText}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => handleShare('facebook')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
            
            <Button
              onClick={() => handleShare('twitter')}
              className="bg-sky-500 hover:bg-sky-600 text-white"
            >
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
            
            <Button
              onClick={() => handleShare('whatsapp')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            
            <Button
              onClick={() => handleShare('instagram')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </Button>
          </div>
          
          <Button
            onClick={copyToClipboard}
            variant="outline"
            className="w-full"
          >
            {copied ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Text
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SocialShare;