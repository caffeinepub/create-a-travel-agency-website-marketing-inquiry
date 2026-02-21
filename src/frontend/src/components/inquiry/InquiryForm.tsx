import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useSubmitInquiry } from '@/hooks/useSubmitInquiry';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  travelDates: string;
  destination: string;
  numTravelers: string;
  budgetRange: string;
  message: string;
}

interface InquiryFormProps {
  prefillDestination?: string;
  prefillPackage?: string;
}

export default function InquiryForm({ prefillDestination, prefillPackage }: InquiryFormProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<InquiryFormData>({
    defaultValues: {
      destination: prefillDestination || prefillPackage || '',
    }
  });

  const submitInquiryMutation = useSubmitInquiry();

  const onSubmit = async (data: InquiryFormData) => {
    try {
      await submitInquiryMutation.mutateAsync({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone || null,
        travelDates: data.travelDates || null,
        destination: data.destination,
        numTravelers: BigInt(data.numTravelers),
        budgetRange: data.budgetRange || null,
        message: data.message,
      });
      setShowSuccess(true);
      reset();
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to submit inquiry:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <h2 className="font-display text-2xl font-bold">Send Us an Inquiry</h2>
        <p className="text-sm text-muted-foreground">
          Fill out the form below and we'll get back to you within 24 hours
        </p>
      </div>

      {showSuccess && (
        <Alert className="bg-primary/10 border-primary/20">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <AlertDescription className="text-primary">
            Thank you! Your inquiry has been submitted successfully. We'll be in touch soon.
          </AlertDescription>
        </Alert>
      )}

      {submitInquiryMutation.isError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Failed to submit inquiry. Please try again or contact us directly.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            {...register('fullName', { required: 'Full name is required' })}
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="text-sm text-destructive">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone (Optional)</Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="travelDates">Travel Dates (Optional)</Label>
          <Input
            id="travelDates"
            {...register('travelDates')}
            placeholder="e.g., June 2026"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="destination">
            Destination/Package Interest <span className="text-destructive">*</span>
          </Label>
          <Input
            id="destination"
            {...register('destination', { required: 'Please specify your interest' })}
            placeholder="e.g., Santorini, European Explorer"
          />
          {errors.destination && (
            <p className="text-sm text-destructive">{errors.destination.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="numTravelers">
            Number of Travelers <span className="text-destructive">*</span>
          </Label>
          <Select
            onValueChange={(value) => setValue('numTravelers', value)}
            defaultValue="2"
          >
            <SelectTrigger id="numTravelers">
              <SelectValue placeholder="Select number" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Traveler</SelectItem>
              <SelectItem value="2">2 Travelers</SelectItem>
              <SelectItem value="3">3 Travelers</SelectItem>
              <SelectItem value="4">4 Travelers</SelectItem>
              <SelectItem value="5">5+ Travelers</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" {...register('numTravelers', { required: true })} />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="budgetRange">Budget Range (Optional)</Label>
          <Select onValueChange={(value) => setValue('budgetRange', value)}>
            <SelectTrigger id="budgetRange">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-2000">Under $2,000</SelectItem>
              <SelectItem value="2000-4000">$2,000 - $4,000</SelectItem>
              <SelectItem value="4000-6000">$4,000 - $6,000</SelectItem>
              <SelectItem value="6000-10000">$6,000 - $10,000</SelectItem>
              <SelectItem value="over-10000">Over $10,000</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" {...register('budgetRange')} />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="message">
            Message <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            {...register('message', { required: 'Please tell us about your travel plans' })}
            placeholder="Tell us about your dream vacation, special requirements, or any questions you have..."
            rows={5}
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        size="lg"
        disabled={submitInquiryMutation.isPending}
      >
        {submitInquiryMutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Inquiry'
        )}
      </Button>
    </form>
  );
}
