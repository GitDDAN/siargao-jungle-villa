import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Share2, Facebook, Instagram, MessageCircle, Twitter } from "lucide-react";
import { toast } from "sonner";

interface RoomSocialShareProps {
  roomName: string;
  roomPrice: string;
  availabilityDate: string;
  roomImage?: string;
}

const RoomSocialShare = ({ roomName, roomPrice, availabilityDate, roomImage }: RoomSocialShareProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const shareText = `Check out this amazing room at Salamat Villa Siargao! 🏄‍♂️ ${roomName} available ${availabilityDate} - ${roomPrice}/night. Perfect for surfers! 🌴`;
  const shareUrl = window.location.href;

  const handleShare = (platform: string) => {
    let url = '';
    
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      case 'instagram':
        // Instagram doesn't support direct sharing via URL, so we'll copy to clipboard
        navigator.clipboard.writeText(shareText + ' ' + shareUrl);
        toast.success("Share text copied to clipboard! Paste it in your Instagram story or post.");
        setIsOpen(false);
        return;
    }
    
    window.open(url, '_blank', 'width=600,height=400');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share Room
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Share {roomName}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-sand-beige p-4 rounded-lg">
            <p className="text-sm text-gray-700">{shareText}</p>
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoomSocialShare;