
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Share2, Mail, MessageCircle, Copy, Check } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemTitle: string;
  itemType: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ 
  isOpen, 
  onClose, 
  itemTitle,
  itemType 
}) => {
  const [shareMethod, setShareMethod] = useState('email');
  const [recipients, setRecipients] = useState('');
  const [message, setMessage] = useState('');
  const [linkCopied, setLinkCopied] = useState(false);

  const handleShare = () => {
    console.log('Compartilhando:', { shareMethod, recipients, message });
    alert(`${itemTitle} compartilhado com sucesso!`);
    onClose();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://ecoguard.app/shared/${itemType}/123`);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Share2 className="w-5 h-5 mr-2" />
            Compartilhar {itemType}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-1">{itemTitle}</h4>
            <Badge variant="secondary">{itemType}</Badge>
          </div>

          <div className="space-y-2">
            <Label>Método de Compartilhamento</Label>
            <Select value={shareMethod} onValueChange={setShareMethod}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">E-mail</SelectItem>
                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                <SelectItem value="telegram">Telegram</SelectItem>
                <SelectItem value="link">Link Direto</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {shareMethod === 'link' ? (
            <div className="space-y-2">
              <Label>Link de Compartilhamento</Label>
              <div className="flex space-x-2">
                <Input
                  value={`https://ecoguard.app/shared/${itemType}/123`}
                  readOnly
                  className="flex-1"
                />
                <Button 
                  variant="outline" 
                  onClick={handleCopyLink}
                  className="shrink-0"
                >
                  {linkCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              {linkCopied && (
                <p className="text-sm text-green-600">Link copiado para a área de transferência!</p>
              )}
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="recipients">
                  {shareMethod === 'email' ? 'Destinatários (e-mails)' : 
                   shareMethod === 'whatsapp' ? 'Números do WhatsApp' : 
                   'Usuários do Telegram'}
                </Label>
                <Textarea
                  id="recipients"
                  placeholder={
                    shareMethod === 'email' ? 'exemplo1@email.com, exemplo2@email.com' :
                    shareMethod === 'whatsapp' ? '+55 11 99999-9999, +55 11 88888-8888' :
                    '@usuario1, @usuario2'
                  }
                  value={recipients}
                  onChange={(e) => setRecipients(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem (opcional)</Label>
                <Textarea
                  id="message"
                  placeholder="Adicione uma mensagem personalizada..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />
              </div>
            </>
          )}

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              {shareMethod === 'email' && <Mail className="w-5 h-5 text-blue-600" />}
              {(shareMethod === 'whatsapp' || shareMethod === 'telegram') && <MessageCircle className="w-5 h-5 text-blue-600" />}
              {shareMethod === 'link' && <Share2 className="w-5 h-5 text-blue-600" />}
              <span className="font-medium text-blue-900">Informações de Compartilhamento</span>
            </div>
            <div className="text-sm text-blue-800">
              <p>• O acesso será limitado às permissões do usuário</p>
              <p>• Links compartilhados expiram em 7 dias</p>
              <p>• Todas as ações de compartilhamento são registradas</p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          {shareMethod !== 'link' && (
            <Button onClick={handleShare} className="bg-blue-600 hover:bg-blue-700">
              <Share2 className="w-4 h-4 mr-2" />
              Compartilhar
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
